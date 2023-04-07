import { axios } from "@/config";
import jwtDecode from "jwt-decode";
const login = async (userData: { email: string; password: string }) => {
  const {data} = await axios.post("/user/login", userData);
  console.log("logged in" ,data.token)
  const decoded = await jwtDecode(data.token)
  console.log("Decoded data", decoded)

  if (data) {
    localStorage.setItem("user", JSON.stringify(jwtDecode(data.token).result));
  }
  return jwtDecode(data.token).result;
};

const register = async (userData: any) => {
  const {data} = await axios.post("/user/register",userData);
  return data;
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
