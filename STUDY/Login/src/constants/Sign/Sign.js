
import axios from "axios";

const signup= async (userId,username, password)=>{
  const SERVERURL = "http://localhost:8080/createuser"; 

  try {
    const response = await axios.post(SERVERURL, {
      userId: userId,
      username: username,
      password: password,
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export {signup};
