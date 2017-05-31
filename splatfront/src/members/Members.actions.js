import $ from 'jquery'

export function testing(text){
  return{
    type: "testing",
    value: text
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
