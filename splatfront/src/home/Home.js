import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';

class Home extends React.Component{

  componentDidMount(){
    this.props.testing()
  }
  render(){
    return(
      <div>
        <h1>TEST HOME</h1>
        <h1> Confirm reducer pass : {this.props.data}</h1>
      </div>
    )
  }
}

const HomeContainer = ReactRedux.connect(
  state => state.home,
  actions
)(Home);

export default HomeContainer
