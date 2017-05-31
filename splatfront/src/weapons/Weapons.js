import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Weapons.actions';
import './Weapons.css'

class Weapons extends React.Component{
  componentDidMount(){
    this.props.allWeapons()
  }

  render(){
    return(
        <div>
            <div className="weaponLibrary">
                {this.props.data.map((obj, idx) =>
                    <div className="weaponLibraryItem">
                        <img key={idx} src={`../../images/weapons/${obj.imagelarge}`} height="100px"/>
                        <h1> {obj.name} </h1>
                    </div>
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


// .sidebar{
//     /*flex: 1.3;*/
//     display: flex;
//     flex-wrap: wrap;
//     border : 5px solid yellow;
//     /*min-height: 100%;*/
//     background-color: black;
//     height:100%;
//
// }
