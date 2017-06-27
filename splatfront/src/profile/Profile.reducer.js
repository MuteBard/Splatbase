const INITAL_STATE = {
  aboutme:null,
  avatar:null,
  currteam:null,
  endorse:null,
  freeagent:null,
  id:null,
  lft:null,
  nnid:null,
  ranklevel:null,
  username:null
};

export default function reducer(state = INITAL_STATE, action){
  if(action.type === "profGET"){
    return Object.assign({},state,{
      aboutme:action.value.aboutme,
      avatar:action.value.avatar,
      currteam:action.value.currteam,
      endorse:action.value.endorse,
      freeagent:action.value.freeagent,
      id:action.value.id,
      lft:action.value.lft,
      nnid:action.value.nnid,
      ranklevel:action.value.ranklevel,
      username:action.value.username
    });
  }
  return state;
}
