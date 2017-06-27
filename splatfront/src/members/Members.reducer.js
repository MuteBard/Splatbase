const INITAL_STATE = {
  data: [],
  text:"",
  person: {}
};

export default function reducer(state = INITAL_STATE, action){
    if(action.type === "testing"){
        let tempText = action.value;
        return Object.assign({},state, {
            text:action.value
        })
    }
    else if (action.type === "memSORT" ||  action.type == "memALL" ){
        return Object.assign({},state, {
            data: action.value
        });

    }
    else if(action.type === "memSEL"){
      let tempPerson = action.value;
      console.log(tempPerson)
      return Object.assign({}, state, {
          person: action.value
      })


    }

  return state;
}
