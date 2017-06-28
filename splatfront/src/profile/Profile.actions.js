import $ from 'jquery'
import BASEURL from '../baseurl'


export function selectMember(query){
  console.log(query)
  let asyncAction = function(dispatch){
    $.ajax({
      url: `${BASEURL}/api/memberselect/:${query}`,
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
