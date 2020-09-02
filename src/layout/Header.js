import React from "react";
import PropTypes from "prop-types";
import {
	makeStyles,
	Typography,
	Button,
	Toolbar,
	Link,
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
	const { sections, title, handleSignOut } = props;

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Button size="small">
					<CreateIcon />
					Write a Question
				</Button>
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

				<Button size="small">Users</Button>
				<Button size="small">Bookmarks</Button>
				<Button size="small">Settings</Button>
				<Button size="small" onClick={handleSignOut}>
					Sign out
				</Button>
			</Toolbar>
			<Toolbar
				component="nav"
				variant="dense"
				className={classes.toolbarSecondary}
			>
				{sections.map((section) => (
					<Link
						color="inherit"
						noWrap
						key={section.title}
						variant="body2"
						href={section.url}
						className={classes.toolbarLink}
					>
						{section.title}
					</Link>
				))}
			</Toolbar>
		</React.Fragment>
	);
}

Header.propTypes = {
	sections: PropTypes.array,
	title: PropTypes.string,
};
