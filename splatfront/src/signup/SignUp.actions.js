import $ from 'jquery'
import BASEURL from '../baseurl'

export function addUsername(data){
  return{
    type: "insertUser",
    value: data
  };
}
export function addNNID(data){
  return{
    type: "insertNNID",
    value: data
  };
}
export function addTeam(data){
  return{
    type: "insertTeam",
    value: data
  };
}
export function addWep(idx){
  return {
    type: "insertWep",
    value: idx
  }
}
export function allWeapons() {
  let asyncAction = function(dispatch) {
    $.get(`${BASEURL}api/weapons/`)
     .then(data => dispatch({
        type: 'wepALL',
        value: data
     }));
  }
  return asyncAction;
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

export function addMember(query){
    let asyncAction = function(dispatch){
        $.ajax({
            url: `${BASEURL}/api/addmember/`,
            data: JSON.stringify({
              addmember: query,
            }),
            method: 'post',
            dataType: 'JSON',
            contentType: 'application/json'
        }).then(data => dispatch({
            type:'addedMember',
            value:data,
        }))
    }
    return asyncAction;
}
