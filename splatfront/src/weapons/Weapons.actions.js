import $ from 'jquery'
import BASEURL from '../baseurl'

export function updateText(text){
  return{
    type: "testing",
    value: text
  };
}

export function allWeapons() {
  let asyncAction = function(dispatch) {
    $.get(`${BASEURL}/api/weapons/`)
     .then(data => dispatch({
        type: 'wepALL',
        value: data
     }));
  }
  return asyncAction;
}

export function updateSearch(query){
    let asyncAction = function(dispatch){
        dispatch(updateText(query))
        $.ajax({
            url: `${BASEURL}/api/weapons/`,
            data: JSON.stringify({
              find: query,
            }),
            method: 'post',
            dataType: 'JSON',
            contentType: 'application/json'
        }).then(data => dispatch({
            type:'wepSort',
            value:data,
        }))
    }
    return asyncAction;
}
