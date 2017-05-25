import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Members.actions';

class Members extends React.Component{
  componentDidMount(){
    this.props.testing()
  }

  render(){
    return(
      <div>
        <h1>TEST MEMBERS</h1>
        <h1> Confirm reducer pass : {this.props.data}</h1>
      </div>
    )
  }
}

const MembersContainer = ReactRedux.connect(
  state => state.weapons,
  actions
)(Members);

export default MembersContainer
