import React, { useEffect,useState } from "react";
import {
	Button,
	TextField,
	Grid,
	makeStyles,
	Typography,
	InputLabel,
	MenuItem,
	FormHelperText,
	FormControl,
	Select
} from "@material-ui/core";
import {submitQues} from '../util/postApi'


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	formControl: {
		margin: theme.spacing(1),
		width: "100%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));
const NewQues = (props) => {
	

	const classes = useStyles();

	const [tag, setTag] = useState("");
	const [ques, setQues] = useState("");

	
	const handleChange = (event) => {
		if (event.target.name === "question") {
			setQues(event.target.value);
		} 
		else {
			setTag(event.target.value);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const value={
			ques,tag
		}
	   submitQues(value);
	   props.history.push('/home');
	  }


	return (
		<React.Fragment>
			
			<div className={classes.paper}>
				
				<Typography component="h1" variant="h5">
					Ask Your Question here
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="question"
								label="question"
								type="question"
								id="question"
								autoComplete="current-password"
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-helper-label">
							Category
						</InputLabel>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={tag}
							onChange={handleChange}
						>
							<MenuItem value={"Travel"}>Travel</MenuItem>
							<MenuItem value={"Science"}>Science</MenuItem>
							<MenuItem value={"Health"}>Health</MenuItem>
							<MenuItem value={"Design"}>Design</MenuItem>
							<MenuItem value={"Technology"}>Technology</MenuItem>
							<MenuItem value={"Culture"}>Culture</MenuItem>
							<MenuItem value={"Business"}>Business</MenuItem>
							<MenuItem value={"Politics"}>Politics</MenuItem>
							<MenuItem value={"Opinion"}>Opinion</MenuItem>
							<MenuItem value={"Style"}>Style</MenuItem>
						</Select>
						<FormHelperText>
							Select the category this question belongs
						</FormHelperText>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</form>
			</div>
		
		</React.Fragment>
	);
};

export default NewQues;
