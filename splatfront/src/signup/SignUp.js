import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './SignUp.actions';

class SignUp extends React.Component{
  componentDidMount(){
    this.props.testing()
  }

  render(){
    return(
      <div>
        <h1>TEST SIGN UP</h1>
        <h1> Confirm reducer pass : {this.props.data}</h1>
      </div>
    )
  }
}

const SignUpContainer = ReactRedux.connect(
  state => state.signup,
  actions
)(SignUp);

export default SignUpContainer
