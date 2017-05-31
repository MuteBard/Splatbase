import $ from 'jquery'

export function updateText(text){
  return{
    type: "testing",
    value: text
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

export function updateSearch(query){
    let asyncAction = function(dispatch){
        dispatch(updateText(query))
        console.log(query)
        $.ajax({
            url: 'http://localhost:4000/api/weapons/',
            data: JSON.stringify({
                find: query,
            }),
            method: 'post',
            dataType: 'JSON',
            contentType: 'application.json'
        })
    }
    return asyncAction;
}


// 'http://localhost:4000/api/weapons/'+ query
