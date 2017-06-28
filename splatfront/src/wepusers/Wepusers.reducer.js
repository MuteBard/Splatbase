const INITAL_STATE = {
  nothing:""
};

export default function reducer(state = INITAL_STATE, action){

  if(action.type === "testing"){
    console.log("TEST 3")
    return Object.assign({},state,{
      nothing: "TEST 4"
    })
  }
  return state;
}
