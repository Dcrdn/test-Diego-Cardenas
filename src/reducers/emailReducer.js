  const initialState = {
    emails:[],
    render:false,
    emailRender:[]
};

function getIndex(email, emails){
    var posModify=-1;
    for(var i = 0; i < emails.length; i++) {
        var obj = emails[i];
        if(obj==email){
          posModify=i;
          break;
        }
    }
    return posModify;
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case "NEW_EMAILS":
        console.log("fetching");
        console.log(action.payload);
        var emailsTemp=state.emails;
        for(var i = 0; i < action.payload.length; i++) {
          if(action.payload[i]!=null){
            action.payload[i]['type']='Inbox';
            emailsTemp.push(action.payload[i]);
          }
        }
        emailsTemp.sort(function(a,b) { 
            return new Date(a.date).getTime() - new Date(b.date).getTime() 
        });
        emailsTemp.reverse();
        console.log(emailsTemp);
        return {
          ...state, emails:emailsTemp
        };
      case "EMAIL_RECEIVED":
        return {
          ...state, emails:action.payload
        };
      case "EMAIL_SELECTED":
        var posModify=getIndex(action.payload[1],state.emails);
        var emailsTemp=state.emails;
        emailsTemp[posModify]['isReaded']=true;
        
        return{
          ...state, render:action.payload[0], emailRender:action.payload[1],emails:emailsTemp
        };
      case "TYPE_CHANGED":
        var posModify=getIndex(action.payload[1],state.emails);
        var emailsTemp=state.emails;
        emailsTemp[posModify]['type']=action.payload[0];

        return{
          ...state,emails:emailsTemp,render:false
        };
      case "MARK_UNREAD":
        var posModify=getIndex(action.payload,state.emails);
        var emailsTemp=state.emails;
        emailsTemp[posModify]['isReaded']=false;
        return{
          ...state, emails:emailsTemp,render:false
        };
      case "RELOAD":
        return{
          ...state
        }
      default:
        return state;      
    }
  }

  export default reducer;