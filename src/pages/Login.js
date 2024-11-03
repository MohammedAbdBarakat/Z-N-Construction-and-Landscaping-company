import{ useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from '../hooks/useLogin';
import { useForgetPassword } from '../hooks/useForgetPassword';

import ErrorMessage from '../components/ErrorMessage';
import SuccessMessage from '../components/SuccessMessage';
import InvalidFields from "../components/InvalidFields";

//images:
import logoImg from "../images/logo.png"
import mainImg from "../images/Rectangle 11.png"
import emailImg from "../images/ic_outline-email.png"
import passImg from "../images/carbon_password.png"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login, error, setError, success, setSuccess, isLoading, invalid } = useLogin()
    const { forgetPassword, isLoadingF, errorF, setErrorF, successF, setSuccessF } = useForgetPassword()

    const userData = {
        email,
        password
    }

    const navigate = useNavigate()

    //handle change password.
    const [isForgetPassword, setIsForgetPassword] = useState(false)
    const handleChangePassword = async () => {
        await forgetPassword(userData)
    }
    useEffect(() => {
        if (successF) {
            setTimeout(() => {
                navigate("/verify-password", {state: {email: userData.email}})
            }, 2000);
        }
    }, [successF])


    const handleDismiss = () => {
        setError(null);
        setSuccess(null)
        setErrorF(null);
        setSuccessF(null)
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        await login (userData)
    }


    return (
        <>
        {/* nav   */}
        <header className="bg-gradient-to-r from-#074143 to-#0E7E83 sticky top-0 z-10 w-full h-[79px]"></header>
        <div className="flex flex-col-reverse 2xl:flex-row bg-#EEF9F3">
            {/* form div */}
            <div className="bg-#EEF9F3 flex flex-col justify-center items-center w-full">
                <p className="font-[700] sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl m-8">WELCOME</p>
                <p className="font-[700] sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">REINVENT YOUR SPACE WITH US</p>
                {/* logo */}
                <img src={logoImg} alt="logo" className="w-24 h-20 m-5" />
                {/* form */}
                <form onSubmit={handleLogin}>
                    <label htmlFor="email" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">EMAIL ADDRESS:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] border-2 rounded-[10px] border-black shadow-md shadow-slate-500 my-4">
                        <img src={emailImg} alt="email" className="2xl:w-[26px] 2xl:h-[26px] mr-4 ml-2" />
                        <input
                            required
                            type="text" 
                            placeholder="EXAMPLE@GMAIL.COM"
                            onChange={(e) => {setEmail(e.target.value)}}
                            value={email}
                            className="bg-transparent w-full"
                        />
                    </div>
                    <label htmlFor="password" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">PASSWORD:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] border-2 rounded-[10px] border-black shadow-md shadow-slate-500 mt-4">
                        <img src={passImg} alt="password" className="2xl:w-[26px] 2xl:h-[26px] mr-4 ml-2" />
                        <input
                            required
                            type="password" 
                            placeholder="YOUR PASSWORD" 
                            onChange={(e) => {setPassword(e.target.value)}}
                            value={password}
                            className="bg-transparent w-full"
                        />
                    </div>
                    {invalid && <InvalidFields invalidMessage={invalid} /> }
                    <div className="flex flex-col items-center">
                        <p className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mt-8 mb-2">DON'T HAVE AN ACCOUNT?
                            <Link to={"/signup"}  className="text-#0E7E83 ml-2">SIGN UP</Link>
                        </p>
                        {!isLoadingF && <p className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mb-2">FORGET PASSWORD?
                            <button type='button' onClick={handleChangePassword} className="text-#0E7E83 ml-2">CHANGE PASSWORD</button>
                        </p>}
                        {isLoadingF && <p className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mb-2">FORGET PASSWORD?
                            <button disabled type='button' onClick={handleChangePassword} className="text-#0E7E83 ml-2">LOADING...</button>
                        </p>}
                        {!isLoading && <div className="flex justify-center ">
                            <button className="bg-#2BE784 mt-8 text-[20px] font-[500] border-2 rounded-[10px] border-black p-4 2xl:p-2 2xl:w-[204px] 2xl:h-[49px]">LOGIN</button>
                        </div>}
                        {isLoading && <div className="flex justify-center ">
                            <button disabled className="bg-green-400 mt-8 text-[20px] font-[500] border-2 rounded-[10px] border-black p-4 2xl:p-2 2xl:w-[204px] 2xl:h-[49px]">LOADING...</button>
                        </div>}
                    </div>
                </form>
            </div>
            {/* img div */}
            <div className="hidden 2xl:block w-full">
                <img src={mainImg} className="2xl:h-full" />
            </div>
        </div>
        {/* login success and errors messages */}
        {success && <SuccessMessage handleDismiss={handleDismiss} successMessage = {success} />}
        {error && <ErrorMessage handleDismiss={handleDismiss} errorMessage={error} />}
        {/* forget password success and errors messages */}
        {successF && <SuccessMessage handleDismiss={handleDismiss} successMessage = {successF} />}
        {errorF && <ErrorMessage handleDismiss={handleDismiss} errorMessage={errorF} />}
        </>
    );
}

export default Login;