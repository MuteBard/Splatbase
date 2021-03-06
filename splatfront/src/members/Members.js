import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Members.actions';
import './Members.css'
import {Link} from 'react-router';

class Members extends React.Component{
    componentDidMount(){
        this.props.allMembers()
  }

  render(){
      return(
          <div>
              <div className="searchContainer">
                  <input className="search"  placeholder="Enter a member's name" type="text" value={this.props.text} onChange={event => this.props.updateSearch(event.target.value)}/>
              </div>
              <span className="ghostspace1"></span>
              <div className="memberLibrary">
                  {this.props.data.map((obj, idx) =>
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
const MembersContainer = ReactRedux.connect(
  state => state.member,
  actions
)(Members);

export default MembersContainer
