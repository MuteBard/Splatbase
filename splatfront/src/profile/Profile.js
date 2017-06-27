import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Profile.actions';


class Profile extends React.Component{
  componentDidMount(){
    this.props.profileContent(this.props.member.person)
  }


  render(){
    return(
      <div>
        <span className="ghostspace1"></span>
        <div className="profContainer">
          <div className="profLibrary">
            <div className="profLibraryItem username">
              <h1>{this.props.prof.username}</h1>
            </div>
            <div className="profLibraryItem">
              <h1>Nintendo Network ID</h1>
              <h1>{this.props.prof.nnid}</h1>
            </div>
            <div className="profLibraryItem">
              <h1>Current Team</h1>
              <h1>{this.props.prof.currteam}</h1>
            </div>
            <div className="profLibraryItem">
              <h1>Rank</h1>
              <h1>{this.props.prof.ranklevel}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileContainer = ReactRedux.connect(
  state => state,
  actions
)(Profile)

export default ProfileContainer
