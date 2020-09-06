import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Divider } from "@material-ui/core";
import Cards from "../components/cards";

export default function Main(props) {
	const { title, allPosts } = props;
	

	return (
		<Grid item xs={12} md={8}>
			<Typography variant="h6" gutterBottom>
				{title}
			</Typography>
			<Divider />
			{allPosts.map((post, index) => <Cards key={index} post={post} />)}
		</Grid>
	);
}

Main.propTypes = {
	title: PropTypes.string,
};
