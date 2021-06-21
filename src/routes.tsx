import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddUser} />
        <Route path="/edit/:id" component={EditUser} />
      </Switch>
    </Router>
  );
};

export default Routes;
