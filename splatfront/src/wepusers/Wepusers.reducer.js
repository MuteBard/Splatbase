const INITAL_STATE = {
  text:"",
  people:[]
};

export default function reducer(state = INITAL_STATE, action){
  if(action.type === "text"){
      return Object.assign({},state, {
          text:action.value
      })
  }

  else if (action.type === "wepusersGET"){
    let tempPeople = []
    action.value.map(elem => tempPeople.push(elem))
    return Object.assign({},state,{
      people : tempPeople
    })
  }
  return state;
}
