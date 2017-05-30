const INITAL_STATE = {
  data: []
};

export default function reducer(state = INITAL_STATE, action){
  if (action.type === "memALL"){
    console.log(action.value)
    return Object.assign({},state, {
      data: action.value
    });
  }
  return state;
}
