import {RECEIVE_CURRENT_USER,SIGNOUT_CURRENT_USER} from "../actions/actionTypes";

  
const SessionState = { userId: null, email: null }


  export default (state = SessionState, { type, user }) => {
   // Object.freeze(state);
    switch (type) {
      case RECEIVE_CURRENT_USER:
        return user;
      case SIGNOUT_CURRENT_USER:
        return SessionState;
      default:
        return state;
    }
  };