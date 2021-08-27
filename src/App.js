import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';


class App extends Component {
  render() {
    return(
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/registration'} className="nav-link">Register</Link></li>
          </ul>
          </nav>
          <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/registration' component={Registration} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
