import {RECEIVE_CURRENT_USER,SIGNOUT_CURRENT_USER} from './actionTypes'
import {signin,signout,issigned} from '../../util/authApi'
const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
  });
  const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER
  });
  

export const signIn = user => async dispatch => {
    const response = await signin(user);
    const data = await response.data;
   
  if (response.status===200) {
    console.log("action",data);
      return dispatch(receiveCurrentUser(data));
    }
   // return dispatch(receiveErrors(data));
    // todo: handle errors
  };


export const signOut = () => async dispatch => {
    const response = await signout();
    if(response.data==="deleted"){
      return dispatch(signoutCurrentUser());
    }
    console.log("logout",response);
      
    //return dispatch(receiveErrors(data));
    // todo: handle errors
  };

  export const isSigned = () => async dispatch => {
    const response = await issigned();
    const data = await response.data;
  if (response) {
      return dispatch(receiveCurrentUser(data));
    }
   // return dispatch(receiveErrors(data));
    // todo: handle errors
  };