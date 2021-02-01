import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	sidebarAboutBox: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.grey[200],
	},
	sidebarSection: {
		marginTop: theme.spacing(3),
	},
}));

export default function Sidebar(props) {
	const classes = useStyles();
	const { description } = props;

	return (
		<Grid item xs={12} md={4}>
			<Paper elevation={0} className={classes.sidebarAboutBox}>
				<Typography variant="h6" gutterBottom>
					Dictionary
				</Typography>
				<Typography>{description}</Typography>
			</Paper>
		</Grid>
	);
}

Sidebar.propTypes = {
	description: PropTypes.string,
};
