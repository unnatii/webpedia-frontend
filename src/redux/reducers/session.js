import {RECEIVE_CURRENT_USER,SIGNOUT_CURRENT_USER} from "../../constants/actionTypes";

  
const sessionState = { userId: null, email: null }


  export default (state = sessionState, action) => {
   // Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return action.payload;
      case SIGNOUT_CURRENT_USER:
        return sessionState;
      default:
        return state;
    }
  };