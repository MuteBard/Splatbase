import $ from 'jquery'

export function testing(){
  return{
    type: "testing"
  };
}

export function allWeapons() {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/weapons/')
     .then(data => dispatch({
       type: 'wepALL',
       value: data
     }));
  }
  return asyncAction;
}
