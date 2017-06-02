const INITAL_STATE = {
  username:"",
  nnid:"",
  team:"",
  weps:[]
};

export default function reducer(state = INITAL_STATE, action){
  if (action.type === "insertUser"){
    return Object.assign({},state, {
      username: action.value
    });

  }else if (action.type === "insertNNID"){
    return Object.assign({},state, {
      nnid: action.value
    });

  }else if (action.type === "insertTeam"){
    return Object.assign({},state, {
      weps: action.value
    });

  }else if(action.type === "insertWep"){
    //protect against duplicates (allow select and deselect)
    let tempweps = state.weps.slice()
    if (state.weps.indexOf(action.value) !== -1){
      let itemIndex = state.weps.indexOf(action.value)
      tempweps.splice(itemIndex,1)
    }else{
      tempweps.push(action.value)
    }
    return Object.assign({},state, {
      weps: tempweps
    });




  }
  return state;
}
