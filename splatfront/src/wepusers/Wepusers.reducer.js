const INITAL_STATE = {
  nothing:"",
  people:[]
};

export default function reducer(state = INITAL_STATE, action){

  if(action.type === "testing"){
    console.log("TEST 3")
    return Object.assign({},state,{
      nothing: "TEST 4"
    })
  }
  else if (action.type === "wepusersGET"){
    console.log("TEST 5")
    console.log(action.value)
  }
  return state;
}
