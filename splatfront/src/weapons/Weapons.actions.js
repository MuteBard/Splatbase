import $ from 'jquery'

export function testing(text){
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
//     let asyncAction = function(dispatch){
//         $.ajax({
//             url: 'http://localhost:4000/api/weapons/',
//             data: JSON.stringify({
//                 find: query
//             }),
//             method: 'post',
//             dataType: 'JSON',
//             contentType: 'application.json'
//         })
//     }
}


// 'http://localhost:4000/api/weapons/'+ query
