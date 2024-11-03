import { useState } from "react";
import axios from "axios";


export const useReSendCode = () => {
    const [isLoadingRe, setIsLoadingRe] = useState(false);
    const [errorRe, setErrorRe] = useState(null);
    const [successRe, setSuccessRe] = useState(null);
    const [invalidRe, setInvalidRe] = useState(null)

    const reSendCode = async (userData) => {
        const formData = new FormData();
        formData.append("email", userData.email)

        try {
            setIsLoadingRe(true)
            setErrorRe(null)
            setSuccessRe(null)

            const response = await axios.post("https://backendsec3.trainees-mad-s.com/api/resend-verification-code",
                formData
            )
            setSuccessRe(response.data.message)
        } catch (err) {
            console.log(err);
            setInvalidRe(err.response.data.error)
            setErrorRe("Code resending failed!")
        } finally {
            setIsLoadingRe(false)
        }
    }



    return {reSendCode, isLoadingRe, errorRe, setErrorRe, successRe, setSuccessRe, invalidRe}
}