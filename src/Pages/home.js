import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../layout/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Main from '../layout/Main';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import { connect } from "react-redux";
import {signOutAction} from '../redux/actions/actions'



const sections = [
	{ title: 'Technology', url: '#' },
	{ title: 'Design', url: '#' },
	{ title: 'Culture', url: '#' },
	{ title: 'Business', url: '#' },
	{ title: 'Politics', url: '#' },
	{ title: 'Opinion', url: '#' },
	{ title: 'Science', url: '#' },
	{ title: 'Health', url: '#' },
	{ title: 'Style', url: '#' },
	{ title: 'Travel', url: '#' },

];



const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const home =(props)=> {



  const handleSignOut=()=>{
	props.signOut();
}

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Webpedia" sections={sections} handleSignOut={handleSignOut} />
        <main>
          <MainFeaturedPost  />
        
          <Grid container spacing={5} >
            <Main title="Top posts"  />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Created by Unnatii Tibrewal" />
    </React.Fragment>
  );
}

const mapStateToProps = ({ auth }) => ({
    session:auth.email
  });

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutAction())
  });

  export default connect(mapStateToProps,mapDispatchToProps)(home);