import { useState } from "react";
import axios from "axios";

export const useForgetPassword = () => {
    const [isLoadingF, setIsLoadingF] = useState(false);
    const [errorF, setErrorF] = useState(null);
    const [successF, setSuccessF] = useState(null);

    const forgetPassword = async (userData) => {
        const formData = new FormData();
        formData.append("email",userData.email)

        try {
            setIsLoadingF(true);
            setErrorF(null);
            setSuccessF(null);

            const response = await axios.post("https://backendsec3.trainees-mad-s.com/api/user/password/forgot-password",
                formData
            )
            setSuccessF(response.data.message)
        } catch (err) {
            setErrorF(err.response.data.error)
        } finally {
            setIsLoadingF(false)
        }
    }
    return {forgetPassword, isLoadingF, errorF, setErrorF, successF, setSuccessF}
} 