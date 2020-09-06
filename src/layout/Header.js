import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import {
	makeStyles,
	Typography,
	Button,
	Toolbar,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: "space-between",
		overflowX: "auto",
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const {  title, handleSignOut, auth } = props;

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				{auth?<Link to={"/home/new"}>
				<Button size="small">
					<CreateIcon />
					Write a Question
				</Button></Link>:null}
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					align="center"
					noWrap
					className={classes.toolbarTitle}
				>
					{title}
				</Typography>
			{auth?<span>
				<Link to={"/home"}><Button size="small">Home</Button></Link>
				<Link to={"/users"}><Button size="small">Users</Button></Link>
				<Link to={"/bookmarks"}><Button size="small">Bookmarks</Button></Link>
				<Link to={""}><Button size="small">Settings</Button></Link>
				<Button size="small" onClick={handleSignOut}>
					Sign out
				</Button>
				</span>:null}
			</Toolbar>
		
		</React.Fragment>
	);
}

Header.propTypes = {
	sections: PropTypes.array,
	title: PropTypes.string,
};
