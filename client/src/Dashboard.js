import React, { useState, useEffect } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { getUser, removeUserSession } from './Utils/Common';
import axios from 'axios';

import EditMainNav from './AdminPanel/EditMainNav';
import EditHomePage from './AdminPanel/EditHomePage';
import CreateSubpage from './AdminPanel/CreateSubpage';
import EditSubpage from './AdminPanel/EditSubpage';
import CreateNavigation from './AdminPanel/CreateNavigation';

function Dashboard(props) {
    const [subpages, setSubpages] = useState([]);
    const [navigations, setNavigations] = useState([]);

    const user = getUser();

    const getData = () => {
        axios.get('http://localhost:4000/api/getallsubpages')
            .then(response => {
                setSubpages(response.data.subpages)
            }).catch(error => {
                console.log('error')
            });

        axios.get('http://localhost:4000/api/getallnavigations')
            .then(response => {
                setNavigations(response.data.navigations)
            }).catch(error => {
                console.log('error')
            });
    }

    useEffect(() => {
        getData();
    }, [])

    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    const subpagesLinks = subpages.map((element, index) =>
        <div key={index} >
            <NavLink to={`/dashboard/editsubpage/${element._id}`}>{element.name}</NavLink><br />
        </div>)

    const navigationsLinks = navigations.map((element, index) =>
        <div key={index} >
            <NavLink to={`/dashboard/editnavigation/${element._id}`}>{element.name}</NavLink><br />
        </div>)

    return (
        <div>
            <p>Advanced CMS Dashboard</p>
            <NavLink to="/dashboard/editmainnav">Edit Main Nav</NavLink><br />
            <NavLink to="/dashboard/edithomepage">Edit Home Page</NavLink><br />
            <NavLink to="/dashboard/createsubpage">Create subpage</NavLink><br />
            <NavLink to="/dashboard/createnavigation">Create navigation</NavLink><br />
            <a>Subpages</a><br />
            {subpagesLinks}
            <a>Navigations</a><br />
            {navigationsLinks}
            <input type="button" onClick={handleLogout} value="Logout" />
            <Switch>
                <Route exact path="/dashboard/editmainnav" component={props => <EditMainNav {...props} refreshDashboard={getData} />} />
                <Route exact path="/dashboard/edithomepage" component={props => <EditHomePage {...props} refreshDashboard={getData} />} />
                <Route exact path="/dashboard/createsubpage" component={props => <CreateSubpage {...props} refreshDashboard={getData} />} />
                <Route exact path="/dashboard/editsubpage/:id" component={props => <EditSubpage {...props} refreshDashboard={getData} />} />
                <Route exact path="/dashboard/createnavigation" component={props => <CreateNavigation {...props} refreshDashboard={getData} />} />
            </Switch>
        </div>
    );
}

export default Dashboard;
