const INITAL_STATE = {
  data: 0
};

export default function reducer(state = INITAL_STATE, action){
  console.log(action.type)
  if (action.type === "testing"){
    return Object.assign({},state, {
      data: 1
    });
  }
  return state;
}
