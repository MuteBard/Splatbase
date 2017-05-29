import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Weapons.actions';

class Weapons extends React.Component{
  componentDidMount(){
    this.props.allWeapons()
  }

  render(){
    return(
      <div>
      <img src="../../images/backgrounds/blueweb.png" className="coverItem"/>



        <h1>TEST WEAPONS</h1>
        

        <div>
            {this.props.data.map((obj, idx) =>
                <li key={idx}> {obj.name} </li>
            )}
        </div>
      </div>
    )
  }
}

const WeaponsContainer = ReactRedux.connect(
  state => state.weapons,
  actions
)(Weapons);

export default WeaponsContainer
