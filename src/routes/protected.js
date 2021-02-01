import React from "react";
import { Route, Redirect } from "react-router-dom";
const RouteProtected = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				auth ? <Component {...props} /> : <Redirect to="/signin" />
			}
		/>
	);
};

export default RouteProtected;
