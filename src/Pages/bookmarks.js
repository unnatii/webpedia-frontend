import React from "react";
import {  Grid,makeStyles} from "@material-ui/core";
import MainFeaturedPost from "../components/MainFeaturedPost";
import { Main, Sidebar} from "../layout";





const useStyles = makeStyles((theme) => ({
	
	toolbarSecondary: {
		justifyContent: "space-between",
		overflowX: "auto",
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}));
export default function Bookmarks(props) {

	const classes = useStyles();

	return (
		<React.Fragment>
		

					<Grid container spacing={5}>
						{/* <Main title="Bookmarked Posts" /> */}
						<Sidebar description="fdceccdsdcdfcvdf dc" />
					</Grid>
			
		
		</React.Fragment>
	);
};

