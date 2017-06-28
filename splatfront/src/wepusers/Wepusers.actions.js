import $ from 'jquery'
import BASEURL from '../baseurl'

export function testing(){
  console.log("TEST 2")
  return{
    type:"testing",
  }
}

export function selectMembersfromWeps(query){
  console.log(query)
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
      type:'profGET',
      value: data
    }))
  }
  return asyncAction;
}
