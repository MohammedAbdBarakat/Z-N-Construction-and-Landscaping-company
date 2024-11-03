import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [invalid, setInvalid] = useState(null)

    const { user, dispatch } = useAuthContext()

    const logout = async () => {
        try {
            setIsLoading(true)
            setError(null)
            setSuccess(null)

            const response = await axios.get("https://backendsec3.trainees-mad-s.com/api/logout",{
                headers: {
                    Authorization: `Bearer ${user.token}`
                    }
                }
            )
            setSuccess(response.data.message);

            //dispatch logout action
            dispatch({type: 'LOGOUT'})

            //remove user from local storage
            localStorage.removeItem('user')
        } catch (err) {
            console.error("logout error:", err.response.data.error);
            setInvalid(err.response.data.error)
            setError("Logout Failed")
        } finally {
            setIsLoading(false)
        }
    }
    return {logout, isLoading, error, setError, success, setSuccess, invalid}
}