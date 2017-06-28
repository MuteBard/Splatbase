import $ from 'jquery'
import BASEURL from '../baseurl'

export function updateText(text){
  return{
    type: "testing",
    value: text
  };
}

export function allMembers() {
  let asyncAction = function(dispatch) {
    $.get(`${BASEURL}/api/member/`)
     .then(data => dispatch({
        type: 'memALL',
        value: data
     }));
  }
  return asyncAction;
}

export function updateSearch(query){
    let asyncAction = function(dispatch){
        dispatch(updateText(query))
        $.ajax({
            url: `${BASEURL}/api/member/`,
            data: JSON.stringify({
              find: query,
            }),
            method: 'post',
            dataType: 'JSON',
            contentType: 'application/json'
        }).then(data => dispatch({
            type:'memSORT',
            value:data,
        }))
    }
    return asyncAction;
}
