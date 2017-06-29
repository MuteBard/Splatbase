import $ from 'jquery'
import BASEURL from '../baseurl'

export function selectMembersfromWeps(query){
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/memberwepselect/:${query}`,
      data: JSON.stringify({
        id : query,
      }),
      method: 'post',
      dataType: 'JSON',
      contentType: 'application/json'
    }).then(data => dispatch({
        type:'wepusersGET',
        value: data
      }))
  }
  return asyncAction;
}

export function updateText(text){
  return{
    type: "text",
    value: text
  };
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
