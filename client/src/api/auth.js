import axios from 'axios';
const API_URL='http://Localhost:5000/api/auth';
export const RegisterUser=async(userData)=>{
    try{
        const response=await axios.post(`${API_URL}/register`,userData);
        return response.data;
    }catch(error){
        throw error.response?.data?.message || "something went wrong";
    }
    
    
};

export const LoginUser=async(userData)=>{
    try{
        const response=await axios.post(`${API_URL}/login`,userData);
        return response.data;
    }catch(error){
        throw error.response?.data?.message || "something went wrong";

    }

};