import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Weapons.actions';
import './Weapons.css'
import {Link} from 'react-router';

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
            <span className="ghostspace1"></span>
            <span className="weaponLibrary">
                {this.props.data.map((obj, idx) =>
                    <span className="weaponLibraryItem">
                      <Link key={idx} to={"wepusers/:"+obj.id}>
                        <img key={idx} src={`../../images/weapons/${obj.imagelarge}`} height="100px"/>
                        <h1> {obj.name} </h1>
                      </Link>
                    </span>
                )}
            </span>
        </div>
    )
  }
}

const WeaponsContainer = ReactRedux.connect(
    state => state.weapons,
    actions
)(Weapons);

export default WeaponsContainer
