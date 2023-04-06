import { axios } from "@/config";
import jwtDecode from "jwt-decode";
const login = async (userData: { email: string; password: string }) => {
  const {data} = await axios.post("/user/login", userData);
  console.log(data)
  if (data) {
    localStorage.setItem("user", jwtDecode(JSON.stringify(data.token)));
  }
  return data.token;
};

const register = async (userData: any) => {
  const response = await axios.post("/user/register");
  return response;
};
const logout = ()=>{
  localStorage.removeItem('user')
}

const authService = {
  login,
  register,
  logout,
};

export default authService;
