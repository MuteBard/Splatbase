const INITAL_STATE = {
  data: [],
  text:""
};

export default function reducer(state = INITAL_STATE, action){
    if(action.type === "testing"){
        let tempText = action.value
        return Object.assign({},state, {
            text:action.value
        })
    }
    if (action.type === "teamSort" ||  action.type == "teamALL"){
        return Object.assign({},state, {
            data: action.value
        });
    }

  return state;
}
