import React from 'react';
import { 
  BrowserRouter as 
  Router, 
  Route, 
  Switch, 
  // Redirect 
} from 'react-router-dom'
import DashboardPage from '../DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import TablesPage from '../pages/TablesPage';
import MapsPage from '../pages/MapsPage';
import NotFoundPage from '../pages/NotFoundPage';

class Routes extends React.Component {
  render() {
    return (
  <Router>
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
  </Router>
    );
  }
}

export default Routes;
