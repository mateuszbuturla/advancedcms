import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { getUser, removeUserSession } from './Utils/Common';

import EditHomePage from './AdminPanel/EditHomePage';
import CreateSubpage from './AdminPanel/EditSubpage';

function Dashboard(props) {
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      <p>Advanced CMS Dashboard</p>
      <NavLink to="/dashboard/edithomepage">Edit Home Page</NavLink>
      <NavLink to="/dashboard/createsubpage">Create subpage</NavLink>
      <input type="button" onClick={handleLogout} value="Logout" />
      <Switch>
        <Route exact path="/dashboard/edithomepage" component={EditHomePage} />
        <Route exact path="/dashboard/createsubpage" component={CreateSubpage} />
      </Switch>
    </div>
  );
}

export default Dashboard;
