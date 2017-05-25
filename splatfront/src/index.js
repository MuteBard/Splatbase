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

import registerServiceWorker from './registerServiceWorker';

//sum up all the reducers into one reducer to feed into the store
const reducer = Redux.combineReducers({
  home: homeReducer,
  signup: signUpReducer,
  member: membersReducer,
  teams: teamsReducer,
  weapons: weaponsReducer
});

//create a location call the store where the state of the DOM will be kept and updated for containers to see
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component{
  render() {
    return(
      <div>
        <ul className="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomeContainer}/>

        <Route path="/weapons" component={WeaponsContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);

registerServiceWorker();
// <Route Path="/signup" component={SignUpContainer}/>
// <Route Path="/members" component={MembersContainer}/>
// <Route Path="/teams" component={TeamsContainer}/>
