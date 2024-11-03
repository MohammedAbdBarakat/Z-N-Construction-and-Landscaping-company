import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext"

export const useVerifyEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [invalid, setInvalid] = useState(null);

    const { dispatch } = useAuthContext();



    const verifyEmail = async (userData) => {
        const formData = new FormData();
        formData.append("email", userData.email);
        formData.append("code", userData.code);

        try {
            setIsLoading(true);
            setError(null);
            setSuccess(null);

            const response = await axios.post("https://backendsec3.trainees-mad-s.com/api/verify-email",
                formData
            );

            setSuccess(response.data.message);

            //grab the token from the response
            const token = response.data.token;

            //grab the user's email
            const email = userData.email

            //init user to save it in auth context
            const user = {
                email,
                token
            }
            
            //save the user's data in local storage
            localStorage.setItem('user', JSON.stringify(user))
            
            //update the auth context
            dispatch({type: 'LOGIN', payload: user })
            
        } catch (err) {
            console.log(err);
            setInvalid(err.response.data.error)
            setError("verifying failed")
        } finally {
            setIsLoading(false)
        }
    } 
    return {verifyEmail, isLoading, error, setError, success, setSuccess, invalid};
}