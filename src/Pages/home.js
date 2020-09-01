import React from 'react';
import { connect } from "react-redux";
import {signOutAction} from '../redux/actions/actions'


const home = (props) => {
    const handleSignOut=()=>{
        props.signOut();
    }
    return ( <div>
        Welcome {props.session}!
        <button onClick={handleSignOut}>Signout</button>
    </div> );
}
 
const mapStateToProps = ({ auth }) => ({
    session:auth.email
  });

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutAction())
  });
export default connect(mapStateToProps,mapDispatchToProps)(home);