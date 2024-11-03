import{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChangePassword } from '../hooks/useChangePassword';
import ErrorMessage from '../components/ErrorMessage';
import InvalidFields from "../components/InvalidFields";
import SuccessMessage from "../components/SuccessMessage";
//images:
import logoImg from "../images/logo.png"
import mainImg from "../images/Rectangle 111.png"
import passImg from "../images/carbon_password.png"

const ChangePassword = () => {
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const { changePassword, isLoading, error, setError, success, setSuccess, invalid  } = useChangePassword()

    const navigate = useNavigate();

    const userData = {
        password,
        newPassword
    }

    const handleChangePassword = async (e) => {
        e.preventDefault()
        await changePassword(userData)
    }

    const handleDismiss = () => {
        setError(null)
        setSuccess(null);
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate('/')
            }, 1000);
        }
    })


    return ( 
    //nav 
    <>
    <header className="bg-gradient-to-r from-#074143 to-#0E7E83 sticky top-0 z-10 w-screen xl:w-[1920px] h-[79px]"></header>
        <div className="flex flex-col-reverse xl:flex-row w-screen">
            {/* img div */}
            <div className="hidden xl:block xl:w-[50%] xl:h-full">
                <img src={mainImg} className="xl:h-[1001px]" />
            </div>
            {/* form div */}
            <div className="bg-EEF9F3 flex flex-col justify-center items-center
                            xl:w-[50%] xl:h-[1001px]">
                <p className="font-[700] text-[43px]
                            xl:w-[980px] xl:h-[115px] xl:text-[57px] text-center">CHANGE PASSWORD</p>
                {/* logo */}
                <div className='xl:absolute xl:left-[270px] xl:w-[452px] xl:h-[452px] xl:rounded-[100%] xl:p-8 bg-white bg-opacity-50'>
                    <img src={logoImg} alt="logo" className="w-[143px] h-[118px] xl:w-[252px] xl:h-[208px] m-16" />

                </div>
                <form onSubmit={handleChangePassword}>
                    <label htmlFor="password" className="font-[500] text-[18px] xl:w-[192px] xl:h-[22px] xl:text-[22px]">PASSWORD:</label>
                    <div className="flex items-center bg-#D9D9D980 xl:w-[478px] xl:h-[46px] border-2 rounded-[10px] border-black shadow-md shadow-slate-500 mt-4 mt-4">
                        <img src={passImg} alt="password" className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input
                            required
                            type="password" 
                            placeholder="********"
                            onChange={(e) => {setPassword(e.target.value)}}
                            value={password}
                            className="bg-transparent w-full h-full"/>
                    </div>
                    <label htmlFor="password" className="font-[500] text-[18px] xl:w-[192px] xl:h-[22px] xl:text-[22px]">RE-ENTER PASSWORD:</label>
                    <div className="flex items-center bg-#D9D9D980 xl:w-[478px] xl:h-[46px] border-2 rounded-[10px] border-black shadow-md shadow-slate-500 mt-4">
                        <img src={passImg} alt="password" className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input required
                            type="password" 
                            placeholder="********"
                            onChange={(e) => {setNewPassword(e.target.value)}}
                            value={newPassword}
                            className="bg-transparent w-full h-full"/>
                    </div>
                    <p className="font-[500] text-[16px] text-[#121C17] mt-8 text-center xl:h-[30px] xl:text-[16px]">WE WILL SEND YOU A 6-DIGIT CODE TO VERIFY YOUR ACCOUNT</p>
                    {!isLoading && <div className="flex justify-center ">
                        <button className="bg-#2BE784 mt-8 text-[20px] font-[500] border-2 rounded-[10px] border-black p-4 shadow-md shadow-slate-500
                                            xl:p-2 xl:w-[204px] xl:h-[49px]">SEND CODE</button>
                    </div>}
                    {isLoading && <div className="flex justify-center ">
                        <button disabled className="bg-green-500 mt-8 text-[20px] font-[500] border-2 rounded-[10px] border-black p-4 shadow-md shadow-slate-500
                                            xl:p-2 xl:w-[204px] xl:h-[49px]">LOADING ...</button>
                    </div>}
                    {invalid && <InvalidFields invalidMessage={invalid} />}
                </form>
            </div>
            {success && <SuccessMessage handleDismiss={handleDismiss} successMessage = {success} />}
            {error && <ErrorMessage handleDismiss={handleDismiss} errorMessage={error} />}
        </div>
    </>
    );
}

export default ChangePassword;