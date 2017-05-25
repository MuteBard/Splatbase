import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Teams.actions';

class Teams extends React.Component{
  componentDidMount(){
    this.props.testing()
  }

  render(){
    return(
      <div>
        <h1>TEST TEAMS</h1>
        <h1> Confirm reducer pass : {this.props.data}</h1>
      </div>
    )
  }
}

const TeamsContainer = ReactRedux.connect(
  state => state.weapons,
  actions
)(Teams);

export default TeamsContainer
