import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const loginUser = async (email:string, password:string) => {
    try {
      const response = await axios.post(
        `${apiUrl}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true, // Include cookies in the request
        }
      );
  
      if (response.data) {
        const token = response.data.data;
  
        try {
          localStorage.setItem("token", JSON.stringify(token));
        } catch (error) {
        //   console.error("Error fetching user data:", error);
        }
      }
      return response.data;
    } catch (error) {
      // console.error(error);
      // throw error;
    }
  };

  // export const userSignup = async (data) => {
  //   try {
  //     const response = await axios.post(`${apiUrl}/signup`, {
  //       ...data,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     // throw error("Error In Register User:", error);
  //   }
  // };
  export const userSignup=async(data:any)=>axios.post(`${apiUrl}/signup`,{
    ...data,
  }).then((res:any)=>res.data).catch((error:any)=>{
    throw error;
  });