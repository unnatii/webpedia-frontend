import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Divider } from "@material-ui/core";
import Cards from "../components/cards";

export default function Main(props) {
	const { title } = props;

	return (
		<Grid item xs={12} md={8}>
			<Typography variant="h6" gutterBottom>
				{title}
			</Typography>

			<Divider />
			<Cards />
			<Cards />
			<Cards />
		</Grid>
	);
}

Main.propTypes = {
	title: PropTypes.string,
};
