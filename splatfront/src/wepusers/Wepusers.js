import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Wepusers.actions';

class Wepusers extends React.Component{
  componentDidMount(){
    let id = this.props.params.id
    this.props.selectMembersfromWeps(id.substring(1))
  }


  render(){
    console.log("TEST 1")
    return(
      <div>{this.props.params.id}</div>
    )
  }
}

const WepusersContainer = ReactRedux.connect(
    state => state.wepusers,
    actions
)(Wepusers);

export default WepusersContainer
