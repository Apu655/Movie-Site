import axios from "axios";

const login = async (userData: { email: string; password: string }) => {
  const response = await axios.post("/user/login", userData);

  if (response && response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.token));
  }
  return response.data.token;
};

const register = async (userData:any)=>{
    const response = await axios.post("/user/register")
    return response
}

const authService = {
  login,
  register,
};

export default authService;
