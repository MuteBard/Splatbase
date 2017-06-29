import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Wepusers.actions';
import {Link} from 'react-router';

class Wepusers extends React.Component{
  componentDidMount(){
    let id = this.props.params.id
    this.props.selectMembersfromWeps(id.substring(1))
  }


  render(){
      return(
          <div>
              <div className="searchContainer">
                  <input className="search"  placeholder="Enter a member's name" type="text" value={this.props.text} onChange={event => this.props.updateSearch(event.target.value)}/>
              </div>
              <span className="ghostspace1"></span>
              <div className="memberLibrary">
                  {this.props.people.map((obj, idx) =>
                      <div className="memberLibraryItem">
                        <Link key={idx} to={"profile/:"+obj.id}>
                          <h1 key={idx}> {obj.username} </h1>
                        </Link>
                      </div>
                  )}
              </div>
          </div>
      )
  }
}

const WepusersContainer = ReactRedux.connect(
    state => state.wepusers,
    actions
)(Wepusers);

export default WepusersContainer
