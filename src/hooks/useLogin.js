import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [invalid, setInvalid] = useState(null)

    const { dispatch } = useAuthContext();


    const login = async (userData) => {
        const formData = new FormData();
        formData.append("email", userData.email);
        formData.append("password", userData.password);

        try {
            setIsLoading(true);
            setError(null);
            setSuccess(null);

            const response = await axios.post("https://backendsec3.trainees-mad-s.com/api/login", 
                formData
            );
            
            setSuccess(response.data.message);

            //grab the token from the response
            const token = response.data.access_token; 
            
            //grab the user's email
            const email = userData.email

             //init user for save it in auth context
            const user = {
                email,
                token
            }

            //save the user's data in local storage
            localStorage.setItem('user', JSON.stringify(user))

            //update the auth context
            dispatch({type: 'LOGIN', payload: user })
            
        } catch (err) {
            console.error("login error:", err.response.data.error);
            setInvalid(err.response.data.error)
            setError("Login Failed")
        } finally {
            setIsLoading(false);
        }
    };

    return { login, error, setError, success, setSuccess, isLoading, invalid };
}
