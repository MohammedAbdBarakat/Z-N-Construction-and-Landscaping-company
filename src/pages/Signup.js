import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSignup } from "../hooks/useSignUp";
import ErrorMessage from '../components/ErrorMessage';
import InvalidFields from "../components/InvalidFields";
import SuccessMessage from "../components/SuccessMessage";

//images:
import avatarImg from "../images/clarity_user-line.png"
import logoImg from "../images/logo.png"
import mainImg from "../images/Rectangle 1111.png"
import emailImg from "../images/ic_outline-email.png"
import phoneImg from "../images/ph_phone.png"
import usernameImg from "../images/clarity_user-line1.png"
import passImg from "../images/carbon_password.png"
import plusImg from "../images/plusicon.png"
import droplistIcon from "../images/ep_arrow-down.png"
import homeResources from "../Resources/homeResources";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [phoneNumber,SetPhoneNumber] = useState("")
    const [fullName,SetFullName] = useState("")
    const [password, setPassword] = useState("")
    const [re_password, setRe_Password] = useState("")
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [profileAvatar, setProfileAvatar] = useState("")

    const userData = {
        email,
        phoneNumber,
        password,
        address,
        country,
        city,
        profileAvatar
    }


    const {signup, error, setError, success, setSuccess, isLoading, invalid} = useSignup()
    const navigate = useNavigate()


    const handleDismiss = () => {
        setError(null)
        setSuccess(null);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileAvatar(URL.createObjectURL(file))
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
    
        // Ensure password and re_password match
        if (password !== re_password) {
            console.log("Passwords do not match.");
            return;
        }
    
        await signup(userData);
    };
    

    //redirect user to verify-account page and passing user email
    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate("/verify-email", {state: {email: userData.email}})
            }, 2000);
        }
    }, [success])

    return ( 
        <>
        <header className="bg-gradient-to-r from-#074143 to-#0E7E83 sticky top-0 z-10 w-full h-[79px]"></header>
        <div className="flex flex-col-reverse 2xl:flex-row bg-#EEF9F3">
           {/* Image div */}
            <div className="relative hidden 2xl:block w-full">
                {/* Main Image */}
                <img src={mainImg} className="2xl:h-full" />
                {/* Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-opacity-50 bg-[#D9D9D980] p-4 w-[540px] h-[540px] flex flex-col items-center justify-center">
                        {/* Logo */}
                        <img src={logoImg} alt="logo" className="w-[252px] h-[208px] object-contain mb-4" />
                        <p className="text-[28px] font-500 text-center">
                            THE CONSTRUCTION AND LANDSCAPING COMPANY
                        </p>
                    </div>
                </div>
            </div>
            {/* form div */}
            <div className="bg-#EEF9F3 flex flex-col justify-center items-center w-full">
                <p className="font-[700] sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl m-8">SIGN UP</p>
                <p className="font-[700] sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">PROFILE PICTURE</p>
                {/* Avatar div */}
                <div className="relative inline-block rounded-full bg-#D9D9D980 bg-opacity-50 mt-4 mb-8">
                    {profileAvatar && (
                        <img src={profileAvatar} className="w-[112px] h-[112px] xl:w-[100px] xl:h-[100px] m-8" />
                        )}
                    {!profileAvatar && (
                        <img src={avatarImg} className="w-[112px] h-[112px] xl:w-[100px] xl:h-[100px] m-8" />
                        )}
                    
                    {/* File Input */}
                    <div className="absolute right-[12px] bottom-[18px] cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            className="opacity-0 absolute inset-0 cursor-pointer w-[28px] h-[28px]"
                            onChange={handleAvatarChange}
                        />
                        <img src={plusImg} className="w-[28px] h-[28px] pointer-events-none" alt="Add Profile Picture" />
                    </div>
                </div>
                <form onSubmit={handleRegister}>
                    <label htmlFor="email" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl m-16">EMAIL ADDRESS:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] m-16 border-2 rounded-[10px] border-black shadow-md shadow-slate-500 my-4">
                        <img src={emailImg} alt="email" className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input 
                            type="text" 
                            placeholder="EXAMPLE@GMAIL.COM"
                            onChange={(e) => {setEmail(e.target.value)}}
                            value={email}
                            className="bg-transparent w-full"
                        />
                    </div>
                    <label htmlFor="phone-number" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl m-16">PHONE NUMBER:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] m-16 border-2 rounded-[10px] border-black shadow-md shadow-slate-500 my-4">
                        <img src={phoneImg} className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input 
                            type="text" 
                            placeholder="0999999999"
                            onChange={(e) => {SetPhoneNumber(e.target.value)}}
                            value={phoneNumber}
                            className="bg-transparent w-full"
                        />
                    </div>
                    <label htmlFor="fullName" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl m-16">FULL NAME:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] m-16 border-2 rounded-[10px] border-black shadow-md shadow-slate-500 my-4">
                        <img src={usernameImg} className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input 
                            type="text" 
                            placeholder="FULL NAME"
                            onChange={(e) => {SetFullName(e.target.value)}}
                            value={fullName}
                            className="bg-transparent w-full"
                        />
                    </div>
                    <label htmlFor="address" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl m-16">ADDRESS:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] m-16 border-2 rounded-[10px] border-black shadow-md shadow-slate-500 my-4">
                        <img src={homeResources.locationIcon} className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input 
                            type="text" 
                            placeholder="ADDRESS"
                            onChange={(e) => {setAddress(e.target.value)}}
                            value={address}
                            className="bg-transparent w-full"
                        />
                    </div>
                    <label htmlFor="password" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl m-16">PASSWORD:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] m-16 border-2 rounded-[10px] border-black shadow-md shadow-slate-500 my-4">
                        <img src={passImg} className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input 
                            type="password" 
                            placeholder="*********"
                            onChange={(e) => {setPassword(e.target.value)}}
                            value={password}
                            className="bg-transparent w-full"
                        />
                    </div>
                    <label htmlFor="re-enter-password" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl m-16">RE-ENTER PASSWORD:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] m-16 border-2 rounded-[10px] border-black shadow-md shadow-slate-500 my-4">
                        <img src={passImg} className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input 
                            type="password" 
                            placeholder="*********"
                            onChange={(e) => {setRe_Password(e.target.value)}}
                            value={re_password}
                            className="bg-transparent w-full"
                        />
                    </div>
                    <div className="flex flex-row w-[487px] justify-between  mr-16 ml-16">
                        <div>
                            <label htmlFor="country" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">COUNTRY:</label>
                            <div className="flex justify-between items-center bg-#D9D9D980 xl:w-[220px] xl:h-[36px] border-2 rounded-[10px] border-black my-4  shadow-md shadow-slate-500">
                                <select className="appearance-none w-full bg-transparent"
                                    name="country" id="country" onChange={(e) => {setCountry(e.target.value)}} value={country}>
                                    <option value=""></option>
                                    <option value="Syria">Syria</option>
                                    <option value="UAE">UAE</option>
                                    <option value="KSA">KSA</option>
                                </select>
                                <img src={droplistIcon} className="xl:w-[17px] xl:h-[17px] mr-4" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="city" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">CITY:</label>
                            <div className="flex justify-between items-center bg-#D9D9D980 xl:w-[220px] xl:h-[36px] border-2 rounded-[10px] border-black my-4  shadow-md shadow-slate-500">
                                <select className="appearance-none w-full bg-transparent"
                                    name="city" id="city" onChange={(e) => {setCity(e.target.value)}} value={city}>
                                    <option value=""></option>
                                    <option value="Damascus">Damascus</option>
                                    <option value="Homs">Homs</option>
                                    <option value="Aleppo">Aleppo</option>
                                </select>
                                <img src={droplistIcon} className="xl:w-[17px] xl:h-[17px] mr-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        {isLoading && <button disabled className="bg-green-400 mt-8 text-[20px] font-[500] border-2 rounded-[10px] border-black p-4 xl:p-2 xl:w-[204px] xl:h-[49px]">LOADING...</button>}
                        {!isLoading && <button className="bg-#2BE784 mt-8 text-[20px] font-[500] border-2 rounded-[10px] border-black p-4 xl:p-2 xl:w-[204px] xl:h-[49px]">CREATE ACCOUNT</button>}
                    </div>
                    {invalid && <InvalidFields invalidMessage={invalid} />}
                    <div className="flex flex-col items-center">
                        <p className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mt-8 mb-2">HAVE AN ACCOUNT?
                            <Link to={"/login"} className="text-#0E7E83 ml-2">LOGIN</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        {success && <SuccessMessage handleDismiss={handleDismiss} successMessage = {success} />}

        {error && <ErrorMessage handleDismiss={handleDismiss} errorMessage={error} />}
        </>
    );
}

export default Signup;