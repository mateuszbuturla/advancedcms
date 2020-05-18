import React, { useState, useEffect } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { getUser, removeUserSession } from './Utils/Common';
import axios from 'axios';
import styledConfig from './config/styledComponentsConfig';

import { MainContainer, PageHeader } from './Components/Universal/Universal';

import EditMainNav from './view/EditMainNav/EditMainNav';
import EditHomePage from './view/EditHomePage/EditHomePage';
import CreateSubpage from './view/CreateSubpage/CreateSubpage';
import EditSubpage from './view/EditSubpage/EditSubpage';
import EditFooter from './view/EditFooter/EditFooter';

function Dashboard(props) {
    const [subpages, setSubpages] = useState([]);

    const user = getUser();

    const getData = () => {
        axios.get('http://localhost:4000/api/getallsubpages')
            .then(response => {
                setSubpages(response.data.subpages)
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

    return (
        <>
            <aside>
                <p>Advanced CMS Dashboard</p>
                <NavLink to="/dashboard/editmainnav">Edit Main Nav</NavLink><br />
                <NavLink to="/dashboard/edithomepage">Edit Home Page</NavLink><br />
                <NavLink to="/dashboard/editfooter">Edit Footer</NavLink><br />
                <NavLink to="/dashboard/createsubpage">Create subpage</NavLink><br />
                <a>Subpages</a><br />
                {subpagesLinks}
                <input type="button" onClick={handleLogout} value="Logout" />
            </aside>

            <MainContainer config={styledConfig}>
                <Switch>
                    <Route exact
                        path="/dashboard/editmainnav"
                        component={props => <EditMainNav {...props} refreshDashboard={getData} />}
                    />
                    <Route exact
                        path="/dashboard/edithomepage"
                        component={props => <EditHomePage {...props} refreshDashboard={getData} />}
                    />
                    <Route exact
                        path="/dashboard/createsubpage"
                        component={props => <CreateSubpage {...props} refreshDashboard={getData} />}
                    />
                    <Route exact
                        path="/dashboard/editsubpage/:id"
                        component={props => <EditSubpage {...props} refreshDashboard={getData} />}
                    />
                    <Route exact
                        path="/dashboard/editfooter"
                        component={props => <EditFooter {...props} refreshDashboard={getData} />}
                    />
                </Switch>
            </MainContainer>
        </>
    );
}

export default Dashboard;
