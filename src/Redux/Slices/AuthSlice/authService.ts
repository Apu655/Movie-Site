import { axios } from "@/config";

const login = async (userData: { email: string; password: string }) => {
  const {data} = await axios.post("/user/login", userData);
  console.log(data)
  if (data) {
    localStorage.setItem("user", JSON.stringify(data.token));
  }
  return data.token;
};

const register = async (userData: any) => {
  const response = await axios.post("/user/register");
  return response;
};

const authService = {
  login,
  register,
};

export default authService;
