import React ,{useEffect}from 'react';
import {
  Switch
} from "react-router-dom";
import Signin from './components/signin'
import Signup from './components/signup'
import Home from './components/home'
import Protected from './hoc/protected'
import RegisterRoute from './hoc/register'
import { connect } from "react-redux";
import {isSigned} from './store/actions/actions'
import { issigned } from './util/authApi';


const  App=(props)=> {

  useEffect(()=>{
       issigned();
  },[])
  return (
    <Switch>
      <RegisterRoute path="/signup" component={Signup}  auth={props.Session} >        
      </RegisterRoute>
      <RegisterRoute path="/signin" component={Signin}  auth={props.Session} >
      </RegisterRoute>
      <Protected path="/home"  component={Home}  auth={props.Session} ></Protected>
    </Switch>

    
  );
}
const mapStatesToProps = state => ({
      Session:state.Auth.userId
});
const mapDispatchToProps = dispatch => ({
  issigned: () => dispatch(isSigned())
});
export default connect(mapStatesToProps,mapDispatchToProps)(App);

