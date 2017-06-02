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
            <div className="searchContainer">
                <input className="search" placeholder="Enter a weapons's name" type="text" value={this.props.text} onChange={event => this.props.updateSearch(event.target.value)}/>
            </div>
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
