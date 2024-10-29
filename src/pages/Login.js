import{ useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


import ErrorMessage from '../components/ErrorMessage';

//images:
import logoImg from "../images/logo.png"
import mainImg from "../images/Rectangle 11.png"
import emailImg from "../images/ic_outline-email.png"
import passImg from "../images/carbon_password.png"
import invalidImg from "../images/Vector1.png"

const Login = ({setIsUserLoggedIn}) => {
    const [email, setEmail] = useState("admin")
    const [password, setPassword] = useState("admin")

    const [isError, setIsError] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const navigate = useNavigate()

    const handleDismiss = () => {
        setIsError(false);
    };

    const handleLogin = (e) => {
        console.log(email, "  ", password);
        
        e.preventDefault();
        if (email === "admin" && password ==="admin") {
            setIsUserLoggedIn(true)
            navigate("/profile")
        } else {
            setIsInvalid(true); 
        }
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
                <form onSubmit={handleLogin}>
                    <label htmlFor="email" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">EMAIL ADDRESS:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] border-2 rounded-[10px] border-black shadow-md shadow-slate-500 my-4">
                        <img src={emailImg} alt="email" className="2xl:w-[26px] 2xl:h-[26px] mr-4 ml-2" />
                        <input 
                            type="text" 
                            placeholder="EXAMPLE@GMAIL.COM"
                            onChange={(e) => {setEmail(e.target.value)}}
                            value={email}
                            className="bg-transparent"
                        />
                    </div>
                    <label htmlFor="password" className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">PASSWORD:</label>
                    <div className="flex items-center bg-#D9D9D980 2xl:w-[478px] 2xl:h-[36px] border-2 rounded-[10px] border-black shadow-md shadow-slate-500 mt-4">
                        <img src={passImg} alt="password" className="2xl:w-[26px] 2xl:h-[26px] mr-4 ml-2" />
                        <input 
                            type="text" 
                            placeholder="YOUR PASSWORD" 
                            onChange={(e) => {setPassword(e.target.value)}}
                            value={password}
                            className="bg-transparent"
                        />
                    </div>
                    {isInvalid && <div className='bg-#EEF9F3 border-2 rounded-[5px] p-4 m-4 text-#D8814F border-#D8814F flex'>
                        <img src={invalidImg} className='mx-2' />
                        <p className='font-[500]'>YOUR EMAIL OR PASSWORD IS INVALID</p>
                    </div>}
                    <div className="flex flex-col items-center">
                        <p className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mt-8 mb-2">DON'T HAVE AN ACCOUNT?
                            <Link to={"/signup"}  className="text-#0E7E83 ml-2">SIGN UP</Link>
                        </p>
                        <p className="font-[500] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mb-2">FORGET PASSWORD?
                            <Link to="/change-password" className="text-#0E7E83 ml-2">CHANGE PASSWORD</Link>
                        </p>
                        <div className="flex justify-center ">
                            <button className="bg-#2BE784 mt-8 text-[20px] font-[500] border-2 rounded-[10px] border-black p-4 2xl:p-2 2xl:w-[204px] 2xl:h-[49px]">LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* img div */}
            <div className="hidden 2xl:block w-full">
                <img src={mainImg} className="2xl:h-full" />
            </div>
        </div>
        {isError && <ErrorMessage handleDismiss={handleDismiss} />}
        </>
    );
}

export default Login;