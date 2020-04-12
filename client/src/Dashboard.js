import React, { useState, useEffect } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { getUser, removeUserSession } from './Utils/Common';
import axios from 'axios';

import EditHomePage from './AdminPanel/EditHomePage';
import CreateSubpage from './AdminPanel/CreateSubpage';
import EditSubpage from './AdminPanel/EditSubpage';

function Dashboard(props) {
    const [subpages, setSubpages] = useState([]);

    const user = getUser();

    useEffect(() => {
        axios.get('http://localhost:4000/api/getallsubpages')
            .then(response => {
                setSubpages(response.data.subpages)
            }).catch(error => {
                console.log('error')
            });
    }, [])

    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    const subpagesLinks = subpages.map((element, index) =>
        <>
            <NavLink to={`/dashboard/editsubpage/${element._id}`}>{element.name}</NavLink><br />
        </>)

    return (
        <div>
            <p>Advanced CMS Dashboard</p>
            <NavLink to="/dashboard/edithomepage">Edit Home Page</NavLink><br />
            <NavLink to="/dashboard/createsubpage">Create subpage</NavLink><br />
            <a>Subpages</a><br />
            {subpagesLinks}
            <input type="button" onClick={handleLogout} value="Logout" />
            <Switch>
                <Route exact path="/dashboard/edithomepage" component={EditHomePage} />
                <Route exact path="/dashboard/createsubpage" component={CreateSubpage} />
                <Route exact path="/dashboard/editsubpage/:id" component={EditSubpage} />
            </Switch>
        </div>
    );
}

export default Dashboard;
