import React from "react";
import { Route, Redirect } from "react-router-dom";
const RouteRegisteration = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				!auth ? <Component {...props} /> : <Redirect to="/home" />
			}
		/>
	);
};

export default RouteRegisteration;
