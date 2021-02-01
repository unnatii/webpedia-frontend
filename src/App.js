import React from "react";
import { Switch, Route } from "react-router-dom";
import {
	SignInPage,
	SignUpPage,
	HomePage,
	NewPasswordPage,
	ResetPasswordPage,
} from "./Pages";
import { AuthRoute, Protected } from "./routes";
import { connect } from "react-redux";
import "antd/dist/antd.css";

const App = (props) => {
	return (
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
				component={HomePage}
				auth={props.authenticated}
			></Protected>
		</Switch>
	);
};
const mapStatesToProps = (state) => ({
	authenticated: state.auth.userId,
});
// const mapDispatchToProps = dispatch => ({

// });
export default connect(mapStatesToProps, null)(App);
