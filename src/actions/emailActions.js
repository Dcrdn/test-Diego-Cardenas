import axios from 'axios';

export function emailSelected(value){
  return (dispatch) =>{
    var isReaded=value.isReaded;
    dispatch({type: "EMAIL_SELECTED", payload:[true, value,isReaded]});
  }
}

export function changeType(value, email){
  return (dispatch) =>{
    dispatch({type: "TYPE_CHANGED", payload:[value,email]});
  }
}

export function markUnread(email){
  return (dispatch) =>{
    dispatch({type: "MARK_UNREAD", payload:email});
  }
}


export function fetch() {
  console.log("fetcheando");
  return (dispatch) => {
    return axios.get('http://localhost:3001/data')
        .then(response =>     dispatch({type: "NEW_EMAILS", payload:response.data}));
    };
}
