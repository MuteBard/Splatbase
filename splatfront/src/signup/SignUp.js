import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './SignUp.actions';

class SignUp extends React.Component{
  componentDidMount(){
    this.props.addUsername()
    this.props.allTeams()
    this.props.allWeapons()
  }

  packMember(){
    let data = {
      username: this.props.signup.username,
      nnid: this.props.signup.nnid,
      team:this.props.signup.team,
      weps: this.props.signup.weps
    }
    return data;
  }


  render(){
    return(
      <div className="l1">
        <span className="ghostspace1"></span>
        <div className="l2">

          <div className="l3">

            <input
              className="sign" value={this.props.signup.username} component="input" type="text"
              placeholder="Username" onChange={event => this.props.addUsername(event.target.value)}
              />
          </div>

          <div className="l3">
            <input
              className="sign" value={this.props.signup.nnid} component="input" type="text"
              placeholder="NNID" onChange={event => this.props.addNNID(event.target.value)}
              />
          </div>

          <div className="l3">
            <select className="teams" value={this.props.signup.team} onChange={event => this.props.addTeam(event.target.value)}>
              <option value={-1}>{"Select a Team"}</option>
              {this.props.teams.data.map((obj, idx) =>
                <option key={idx} value={obj.id}>{obj.teamname}</option>
              )}
            </select>
          </div>

          <div className="l3 special-l3">
            {this.props.weapons.data.map((obj, idx) =>
                <div className={(this.props.signup.weps.indexOf(idx) !== -1 ? "pressed" : null) + " signupwep wiggle"}>
                    <img key={idx}
                         onClick={() => {this.props.addWep(idx)}}
                         src={`../../images/miniwep/${obj.imagesmall}`}
                         height="30px"/>
                </div>
            )}
          </div>
              <button className="button" onClick={() => {this.props.addMember(this.packMember())}}>Submit</button>
          <div>



          </div>


        </div>
      </div>
    )
  }
}

const SignUpContainer = ReactRedux.connect(
  state => state,
  actions
)(SignUp);

export default SignUpContainer
