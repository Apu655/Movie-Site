import Axios from "axios";

const API_URL = "http://localhost:5000/";
export default Axios.create({
  baseURL: API_URL,
});
