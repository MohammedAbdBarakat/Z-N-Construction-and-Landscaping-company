import { useState } from "react";
import axios from "axios";

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [invalid, setInvalid] = useState(null)

    const signup = async (userData) => {
        const formData = new FormData();
        formData.append("full_name", userData.userName);
        formData.append("phone", userData.phoneNumber);
        formData.append("address", userData.address);
        formData.append("governorate", userData.country);
        formData.append("city", userData.city);
        formData.append("email", userData.email);
        formData.append("password", userData.password);

        if (userData.profileAvatar) {
            formData.append("photo", userData.profileAvatar);
        }

        try {
            setIsLoading(true);
            setError(null);
            setSuccess(null);
            const response = await axios.post('https://backendsec3.trainees-mad-s.com/api/register', 
                formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
            );
            setSuccess(response.data.message);
        } catch (error) {
            console.error("Signup error:", error);
            console.log("-------------------------");
            console.log(error.response.data);

            if (error.response.data.email) {
                setInvalid(error.response.data.email)
            } else if (error.response.data.password) {
                setInvalid(error.response.data.password)
            } else if (error.response.data.phone) {
                setInvalid(error.response.data.phone)
            } else {
                setError("Signup failed");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { signup, error, setError, isLoading, success, setSuccess, invalid };
};
