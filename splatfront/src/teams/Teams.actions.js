import $ from 'jquery'
import BASEURL from '../baseurl'

export function updateText(text){
  return{
    type: "testing",
    value: text
  };
}

export function allTeams() {
  let asyncAction = function(dispatch) {
    $.get(`${BASEURL}/api/team/`)
     .then(data => dispatch({
        type: 'teamALL',
        value: data
     }));
  }
  return asyncAction;
}

export function updateSearch(query){
    let asyncAction = function(dispatch){
        dispatch(updateText(query))
        $.ajax({
            url: `${BASEURL}/api/team/`,
            data: JSON.stringify({
              find: query,
            }),
            method: 'post',
            dataType: 'JSON',
            contentType: 'application/json'
        }).then(data => dispatch({
            type:'teamSort',
            value:data,
        }))
    }
    return asyncAction;
}
