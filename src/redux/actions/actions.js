import {RECEIVE_CURRENT_USER,SIGNOUT_CURRENT_USER} from '../../constants/actionTypes'
import {signInUser,signOutUser} from '../../util/authApi'


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    payload:user
  });
  const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER
  });
  

export const signInAction = user => async dispatch => {
    const response = await signInUser(user);
    const data = await response.data;
   
  if (response.status===200) {
      return dispatch(receiveCurrentUser(data));
    }
   // return dispatch(receiveErrors(data));
    // todo: handle errors
  };


export const signOutAction = () => async dispatch => {
    const response = await signOutUser();
    if(response.data==="deleted"){
      return dispatch(signoutCurrentUser());
    }
    console.log("logout",response);
      
    //return dispatch(receiveErrors(data));
    // todo: handle errors
  };

 