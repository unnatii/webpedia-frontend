import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	mainFeaturedPost: {
		position: "relative",
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),

		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	overlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "rgba(0,0,0,.3)",
	},
	mainFeaturedPostContent: {
		position: "relative",
		padding: theme.spacing(3),
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(6),
			paddingRight: 0,
		},
	},
}));

export default function MainFeaturedPost() {
	const classes = useStyles();
	return (
		<Paper
			className={classes.mainFeaturedPost}
			style={{
				backgroundImage: `url(https://hohenfels.armymwr.com/application/files/1515/5445/8068/vz_acs_frg_forum_750x421_jun19.jpg)`,
			}}
		>
			<div className={classes.overlay} />
			<Grid container>
				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography
							component="h1"
							variant="h3"
							color="inherit"
							gutterBottom
						>
							{"Together We Grow !"}
						</Typography>
						<Typography variant="h5" color="inherit" paragraph>
							{
								"Ask Questions . Give Answers . Learn from others . Share your knowledge ."
							}
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}

MainFeaturedPost.propTypes = {
	post: PropTypes.object,
};
