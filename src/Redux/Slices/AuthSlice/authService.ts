import axios from "axios"

const login = async(userData:typeof)=>{
    const response = await axios.post("/user/login",userData)

    if (response && response.data){
        localStorage.setItem('user',JSON.stringify(response.data.token))
    }
    return response.data.token
}

const authService = {
    login

}

export default authService;