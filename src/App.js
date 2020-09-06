import React from "react";
import { Switch, Route } from "react-router-dom";
import {
	SignInPage,
	SignUpPage,
	HomePage,
	NewPasswordPage,
	ResetPasswordPage,
	NewQues,
	Bookmarks,
	allUsers
} from "./Pages";
import { AuthRoute, Protected } from "./routes";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Container, CssBaseline } from "@material-ui/core";
import { signOutAction } from "./redux/actions/actions";
import {Header,Footer} from './layout'


const App = (props) => {
const handleSignOut = () => {
		props.signOut();
	};


	return (
		<React.Fragment>
		<CssBaseline />
		<Container maxWidth="lg">
			<Header
				title="Webpedia"
				handleSignOut={handleSignOut}
				auth={props.authenticated}
			/>
			<main>
		<Switch>
			<Route
				path="/reset/:user/:token"
				exact
				component={NewPasswordPage}
			/>
			<AuthRoute path="/reset" exact component={ResetPasswordPage} />
			<AuthRoute
				path="/signup"
				component={SignUpPage}
				auth={props.authenticated}
			></AuthRoute>
			<AuthRoute
				path="/signin"
				component={SignInPage}
				auth={props.authenticated}
			></AuthRoute>
			<Protected
				path="/home"
				exact
				component={HomePage}
				auth={props.authenticated}
			></Protected>
			<Protected
				path="/home/new"
				exact
				component={NewQues}
				auth={props.authenticated}
			></Protected>
				
			<Protected
				path="/bookmarks"
				exact
				component={Bookmarks}
				auth={props.authenticated}
			></Protected>
			<Protected
				path="/users"
				exact
				component={allUsers}
				auth={props.authenticated}
			></Protected>
		</Switch>
		</main>
		</Container>
			<Footer title="Footer" description="Created by Unnatii Tibrewal" />
		</React.Fragment>
	);
};
const mapStatesToProps = (state) => ({
	authenticated: state.auth.userId,
});
const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(signOutAction()),
});

export default connect(mapStatesToProps, mapDispatchToProps)(App);
