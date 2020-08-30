import axios from 'axios';

export const signup = async user => {
  const result= await axios.post("/user/signup", user);
  return result;
   
}
export const signin = async user => {
    const result= await axios.post("/user/signin", user);
    return result;
     
  }
  
  export const signout = async ()=> {
    const result= await axios.delete("/user/signout");
  //  console.log("*******",result)
    return result;
     
  }

  export const issigned=async () =>{
    const result= await axios.get("/user");
    return result;
  }