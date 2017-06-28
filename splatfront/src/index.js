//stylesheet
import './index.css';

//standard React/Redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

//react router stuff
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

//import all the components and their reducers here
import HomeContainer from './home/Home'
import homeReducer from './home/Home.reducer'
import SignUpContainer from './signup/SignUp'
import signUpReducer from './signup/SignUp.reducer'
import MembersContainer from './members/Members';
import membersReducer from './members/Members.reducer'
import TeamsContainer from './teams/Teams'
import teamsReducer from './teams/Teams.reducer'
import WeaponsContainer from './weapons/Weapons'
import weaponsReducer from './weapons/Weapons.reducer'
import ProfileContainer from './profile/Profile'
import profileReducer from './profile/Profile.reducer'
import WepusersContainer from './wepusers/Wepusers'
import wepusersReducer from './wepusers/Wepusers.reducer'

import registerServiceWorker from './registerServiceWorker';

//sum up all the reducers into one reducer to feed into the store
const reducer = Redux.combineReducers({
  home: homeReducer,
  signup: signUpReducer,
  member: membersReducer,
  teams: teamsReducer,
  weapons: weaponsReducer,
  prof: profileReducer,
  wepusers: wepusersReducer
});

//create a location call the store where the state of the DOM will be kept and updated for containers to see
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component{
  render() {

      let routeStr = (this.props.location.pathname).substring(1,this.props.location.pathname.length);
      routeStr = ( routeStr.indexOf("/") != -1 ? (0,routeStr.indexOf("/")):routeStr)
    return(
      <div>
        <div className="contentContainer">
            <div className="sidebar">
              <div className="sidebarItem text signup"><IndexLink to="/signup" activeClassName="active">Sign Up</IndexLink></div>
              <div className="sidebarItem text members"><IndexLink to="/members" activeClassName="active">Members</IndexLink></div>
              <div className="sidebarItem text Teams"><IndexLink to="/teams" activeClassName="active">Teams</IndexLink></div>
              <div className="sidebarItem text weapons"><IndexLink to="/weapons" activeClassName="active">Weapons</IndexLink></div>
              <div className="sidebarItem text"><IndexLink to="/wepusers:id" activeClassName="active">Wepusers</IndexLink></div>
            </div>
            {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/signup" component={SignUpContainer}/>
        <Route path="/members" component={MembersContainer}/>
        <Route path="/teams" component={TeamsContainer}/>
        <Route path="/weapons" component={WeaponsContainer}/>
        <Route path="/profile/:id" component={ProfileContainer}/>
        <Route path="/wepusers/:id" component={WepusersContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);

registerServiceWorker();
// <div className="sidebarItem text home"><IndexLink to="/" activeClassName="active">Home</IndexLink></div>
