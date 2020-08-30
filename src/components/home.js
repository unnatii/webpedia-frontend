import React from 'react';
import { connect } from "react-redux";
import {signOut} from '../store/actions/actions'


const home = (props) => {
    const handleSignOut=()=>{
        props.signout();
    }
    return ( <div>
        Welcome {props.session}!
        <button onClick={handleSignOut}>Signout</button>
    </div> );
}
 
const mapStateToProps = ({ Auth }) => ({
    session:Auth.email
  });

const mapDispatchToProps = dispatch => ({
    signout: () => dispatch(signOut())
  });
export default connect(mapStateToProps,mapDispatchToProps)(home);