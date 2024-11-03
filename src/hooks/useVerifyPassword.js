import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext"

export const useVerifyPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [invalid, setInvalid] = useState(null);

    const { dispatch } = useAuthContext();


    const verifyPassword = async (userData) => {
        const formData = new FormData();
        formData.append("email", userData.email)
        formData.append("code", userData.code)

        try {
            setIsLoading(true)
            setError(null);
            setSuccess(null);

            const response = await axios.post("https://backendsec3.trainees-mad-s.com/api/user/password/verify-forgot-Password-code", 
                formData
            )
            console.log(response);
            
            setSuccess(response.data.message);

            //grab token from response
            const token = response.data.token;

            //grab the user email
            const email = userData.email

            //initialize user to save it in auth context
            const userVerification = {
                email,
                token
            }

            //save the user's data in local storage
            localStorage.setItem('userVerification', JSON.stringify(userVerification))

            //update the auth context
            dispatch({type: 'RESET PASS', payload: userVerification})
        } catch (err) {
            console.log(err);
            setInvalid(err.response.data.error)
            setError("Verifying Failed")
        } finally {
            setIsLoading(false)
        }
    }
    return {verifyPassword, isLoading, error, setError, success, setSuccess, invalid}
}