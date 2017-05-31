import $ from 'jquery'

export function updateText(text){
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

export function updateSearch(query){
    let asyncAction = function(dispatch){
        dispatch(updateText(query))
        $.ajax({
            url: 'http://localhost:4000/api/member/',
            data: JSON.stringify({
              find: query,
            }),
            method: 'post',
            dataType: 'JSON',
            contentType: 'application/json'
        }).then(data => dispatch({
            type:'memSort',
            value:data,
        }))
    }
    return asyncAction;
}
