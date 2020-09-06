import axios from "axios";

export const submitQues = async value => {
	const result = await axios.post("/post/new",value);
	return result;
};

export const getAllPosts= async ()=>{
	const res=await axios.get("/post/all")
	//console.log(res.data)
	return res.data;
}

export const getAllPostsTagwise= async tag=>{
	const res=await axios.get(`/post/${tag}`)
	//console.log(res.data)
	return res.data;
}