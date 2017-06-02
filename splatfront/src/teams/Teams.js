import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Teams.actions';

class Teams extends React.Component{
    componentDidMount(){
        this.props.allTeams()
  }

    render(){
        return(
            <div>
                <div className="searchContainer">
                    <input className="search"  placeholder="Enter a team's name" type="text" value={this.props.text} onChange={event => this.props.updateSearch(event.target.value)}/>
                </div>
                <div className="teamLibrary">
                    {this.props.data.map((obj, idx) =>
                        <div className="teamLibraryItem">
                            <h1 key={idx}> {obj.teamname} </h1>
                            <h1> {`Captain: ${obj.captain}`} </h1>
                        </div>
                    )}
                </div>
            </div>
        )
      }
    }

const TeamsContainer = ReactRedux.connect(
  state => state.teams,
  actions
)(Teams);

export default TeamsContainer
