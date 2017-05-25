const INITAL_STATE = {
  data: 0
};

console.log("TEST0")
export default function reducer(state = INITAL_STATE, action){
  console.log("TEST1")
  console.log(action.type)
  if (action.type === "testing"){
    console.log("TEST2")
    return Object.assign({},state, {
      data: 1
    });
  }
  return state;
}
