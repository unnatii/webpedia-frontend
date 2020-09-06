import React,{useEffect,useState} from "react";
import {  Grid,Toolbar	,Link ,makeStyles,Button} from "@material-ui/core";
import MainFeaturedPost from "../components/MainFeaturedPost";
import { Main, Sidebar} from "../layout";
import {getAllPosts,getAllPostsTagwise} from '../util/postApi'
import { Route } from "react-router-dom";



const sections = [
	{ title: "All",value:"All" },
	{ title: "Technology",value:"Technology" },
	{ title: "Design" ,value:"Design" },
	{ title: "Culture" ,value:"Culture" },
	{ title: "Business" ,value:"Business" },
	{ title: "Politics" ,value:"Politics" },
	{ title: "Opinion" ,value:"Opinion" },
	{ title: "Science",value:"Science"  },
	{ title: "Health",value:"Health"  },
	{ title: "Style" ,value:"Style" },
	{ title: "Travel",value:"Travel"  }
];
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
export default function Home(props) {
	const classes = useStyles();

	const [allPosts,setAllPosts]=useState([])
	const [Tag,setTag]=useState()

	useEffect(async() => {
	const all=await	getAllPosts();
	   setAllPosts(all);
	   setTag("All")
	  },[]);

	  const changeCategory =async(tag)=>{
		  if(tag==="All"){
			const all=await	getAllPosts();
			setAllPosts(all);
			setTag("All")
		  }else{
			const selected=await getAllPostsTagwise(tag)
			setAllPosts(selected);
			setTag(tag)
		  }
	  }

	return (
		<React.Fragment>
		
			<Toolbar
				component="nav"
				variant="dense"
				className={classes.toolbarSecondary}
			>
				{sections.map((section) => (
				<Button size="small"
						color="inherit"
						noWrap
						key={section.title}
						variant="body2"
						onClick={() => changeCategory(section.value)}
						className={classes.toolbarLink}
					>
						{section.title}
					</Button>
				))}
			</Toolbar>
				
					<MainFeaturedPost />

					<Grid container spacing={5}>
						<Main title={`${Tag} Posts`} allPosts={allPosts} />
						<Sidebar description="fdceccdsdcdfcvdf dc" />
					</Grid>

		</React.Fragment>
	);
};

