import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: "20px 0 0 0",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function SimpleCard(props) {
	const classes = useStyles();
	const {post } = props;
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					User name
				</Typography>
				<Typography variant="h5" component="h2">
					{post.title}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{post.date.substring(0,10)} 
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">View Answers</Button>
			</CardActions>
		</Card>
	);
}
