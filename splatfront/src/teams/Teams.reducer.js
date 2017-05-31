const INITAL_STATE = {
  data: [],
  text:""
};

export default function reducer(state = INITAL_STATE, action){
  if (action.type === "teamALL"){
    console.log(action.value)
    return Object.assign({},state, {
      data: action.value
    });
  }
  else if(action.type === "testing"){
      console.log(action.value)
      let tempText = action.value
      return Object.assign({},state, {
          text:action.value
      })
  }
  return state;
}
