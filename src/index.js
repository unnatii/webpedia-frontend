import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { checkLoggedIn } from "./util/authApi";
import App from "./App";

const renderApp = (preloadedState) => {
	const store = configureStore(preloadedState);
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		document.getElementById("root")
	);
};
(async () => renderApp(await checkLoggedIn()))();
