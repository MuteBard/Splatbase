import $ from 'jquery'

export function testing(){
  return{
    type: "testing"
  };
}

export function allMembers() {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/member/')
     .then(data => dispatch({
       type: 'memALL',
       value: data
     }));
  }
  return asyncAction;
}
