import $ from 'jquery'

export function testing(){
  return{
    type: "testing"
  };
}

export function allTeams() {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/team/')
     .then(data => dispatch({
       type: 'teamALL',
       value: data
     }));
  }
  return asyncAction;
}
