import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Weapons.actions';

class Weapons extends React.Component{
  componentDidMount(){
    this.props.testing()
  }

  render(){
    return(
      <div>
        <h1>TEST WEAPONS</h1>
        <h1> Confirm reducer pass : {this.props.data}</h1>
      </div>
    )
  }
}

const WeaponsContainer = ReactRedux.connect(
  state => state.weapons,
  actions
)(Weapons);

export default WeaponsContainer
