import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext"


export const useChangePassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [invalid, setInvalid] = useState(null)



    //grab email and token from local storage
    const { userVerification } = useAuthContext()
    const token = userVerification?.token
    
    const changePassword = async (userData) => {
        const formData = new FormData();
        formData.append("password",userData.password)
        formData.append("password_confirmation",userData.newPassword)

        try {
            setIsLoading(true)
            setError(null)
            setSuccess(null)

            const response = await axios.post("https://backendsec3.trainees-mad-s.com/api/user/password/reset-password",
                formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                    }
                }
            )
            setSuccess(response.data.message)
        } catch (err) {
            if (err.response.data.error)
                setInvalid(err.response.data.error)
            else if (err.response.data.message.password)
                setInvalid(err.response.data.message.password)
            else setError("Reset Failed")
        } finally {
            setIsLoading(false)
        }
    }
    return { changePassword, isLoading, error, setError, success, setSuccess, invalid }
}