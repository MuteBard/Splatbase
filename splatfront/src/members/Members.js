import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Members.actions';
import './Members.css'

class Members extends React.Component{
    componentDidMount(){
        this.props.allMembers()
  }

    render(){
        return(
            <div>
                <div className="memberLibrary">
                    {this.props.data.map((obj, idx) =>
                        <div className="memberLibraryItem">
                            <h1 key={idx}> {obj.username} </h1>
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
