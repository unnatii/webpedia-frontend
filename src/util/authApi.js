import axios from 'axios';
import {SIGNIN_URL,SIGNOUT_URL,
  SIGNUP_URL,CHECKAUTH_URL,FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL} from '../constants/urls'

export const signUpUser = async user => {
  const result= await axios.post(SIGNUP_URL, user);
  return result;
   
}
export const signInUser = async user => {
    const result= await axios.post(SIGNIN_URL, user);
    return result;
     
  }
  
  export const signOutUser = async ()=> {
    const result= await axios.delete(SIGNOUT_URL);
    return result;
     
  }

  export const checkLoggedIn = async initialState => {
    const response = await axios.get(CHECKAUTH_URL);
  initialState = {};
    if (response.data.user) {
      initialState = {
        Auth: response.data.user
      };
    }
    return initialState;
  };

  export const forgotPasswordForm = async email => {
    const result= await axios.post(FORGOT_PASSWORD_URL,email);
    return result;
     
  }

  export const newPasswordForm= async values => {
    const result= await axios.post(RESET_PASSWORD_URL,values);
    return result;
     
  }