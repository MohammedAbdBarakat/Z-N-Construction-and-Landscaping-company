import{ useState } from 'react';
import { Link } from "react-router-dom";


//images:
import logoImg from "../images/logo.png"
import mainImg from "../images/Rectangle 111.png"
import emailImg from "../images/ic_outline-email.png"
import passImg from "../images/carbon_password.png"

const ChangePassword = () => {
    return ( 
    //nav 
    <>
    <header className="bg-gradient-to-r from-#074143 to-#0E7E83 sticky top-0 z-10 w-full xl:w-[1920px] h-[79px]"></header>
        <div className="flex flex-col-reverse xl:flex-row">
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
                <form>
                    <label htmlFor="email" className="text-[18px] font-[500] xl:w-[192px] xl:h-[22px] xl:text-[22px]">EMAIL ADDRESS:</label>
                    <div className="flex items-center bg-#D9D9D980 xl:w-[478px] xl:h-[46px] border-2 rounded-[10px] border-black my-4">
                        <img src={emailImg} alt="email" className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input type="text" placeholder="EXAMPLE@GMAIL.COM" className="bg-transparent"/>
                    </div>
                    <label htmlFor="password" className="font-[500] text-[18px] xl:w-[192px] xl:h-[22px] xl:text-[22px]">PASSWORD:</label>
                    <div className="flex items-center bg-#D9D9D980 xl:w-[478px] xl:h-[46px] border-2 rounded-[10px] border-black mt-4">
                        <img src={passImg} alt="password" className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input type="text" placeholder="YOUR PASSWORD" className="bg-transparent"/>
                    </div>
                    <label htmlFor="password" className="font-[500] text-[18px] xl:w-[192px] xl:h-[22px] xl:text-[22px]">RE-ENTER PASSWORD:</label>
                    <div className="flex items-center bg-#D9D9D980 xl:w-[478px] xl:h-[46px] border-2 rounded-[10px] border-black mt-4">
                        <img src={passImg} alt="password" className="xl:w-[26px] xl:h-[26px] mr-4 ml-2" />
                        <input type="text" placeholder="" className="bg-transparent"/>
                    </div>
                    <p className="font-[500] text-[16px] text-[#121C17] mt-8 text-center xl:h-[30px] xl:text-[16px]">WE WILL SEND YOU A 6-DIGIT CODE TO VERIFY YOUR ACCOUNT</p>
                    <div className="flex justify-center ">
                        <button className="bg-#2BE784 mt-8 text-[20px] font-[500] border-2 rounded-[10px] border-black p-4
                                            xl:p-2 xl:w-[204px] xl:h-[49px]">SEND CODE</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default ChangePassword;