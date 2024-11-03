import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useVerifyPassword } from "../hooks/useVerifyPassword";
import { useAuthContext } from "../hooks/useAuthContext";


import ErrorMessage from '../components/ErrorMessage';
import SuccessMessage from "../components/SuccessMessage";

//images
import envelopeImg from "../images/morphis-mail-with-a-frosted-glass-effect-1 1.png";
import pic1 from "../images/Ellipse 8.png";
import pic2 from "../images/Ellipse 7.png";
import InvalidFields from "../components/InvalidFields";

const PasswordVerification = () => {
    const { userVerification } = useAuthContext()

    //grabbing user email from login page.
    const location = useLocation()
    const email = location.state?.email;

    const {verifyPassword, isLoading, error, setError, success, setSuccess, invalid} = useVerifyPassword();
    
    const [otp, setOtp] = useState(new Array(6).fill("")); // for a 6-digit OTP

    const handleChange = (value, index) => {
        if (/^[a-zA-Z0-9]$/.test(value) || value === "") { // Check if alphanumeric
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    const code = otp.join("")

    const userData = {
        email,
        code
    }

    const handleVerify = async (e) => {
        e.preventDefault()
        await verifyPassword(userData)
    }

    const navigate = useNavigate()
    //redirect user to reset password page if code is valid 
    useEffect( ()=> {
        if (userVerification)
            navigate('/change-password')
    },[userVerification])

    const handleDismiss = () => {
        setError(null);
        setSuccess(null)
    };


    //handling otp inputs
    useEffect(() => {
        const inputs = document.querySelectorAll('.otp-input');

        inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                if (input.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && input.value === '' && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener('input', () => {});
                input.removeEventListener('keydown', () => {});
            });
        };
    }, []);




    return ( 
        <div className="bg-#EEF9F3 min-h-screen ">
        {/* Navigation Bar */}
        <header className="bg-gradient-to-r from-#074143 to-#0E7E83 relevant top-0 z-100 w-full h-[79px]"></header>

        {/* main images */}
        <div className="flex justify-center">
            <div className="relative mt-12 mr-2">
                <img src={envelopeImg} alt="env" className="relative z-10 w-[220px] xl:w-[281px]" />
                <img src={pic1} alt="pic1" className="absolute w-[150px] top-[12px] left-[150px] xl:w-[203px] xl:-top-[20px] xl:left-[200px]" />
                <img src={pic2} alt="pic2" className="relative w-[120px] -top-[84px] -left-[40px] xl:w-[155px] xl:-top-[140px] xl:-left-[90px]" />
            </div>
        </div>

        {/* Verification Text */}
        <div className="text-center">
            <p className="font-extrabold sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl m-8 font-inter">
                PLEASE VERIFY ACCOUNT
            </p>
            <p className="font-[700] sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-inter mt-2 mb-4">
                ENTER THE 6-DIGIT CODE (CONTAINS LETTERS AND NUMBERS) <br /> 
                THAT WE SENT TO YOUR EMAIL ADDRESS TO RESET YOUR PASSWORD
            </p>
        </div>

        
        <form onSubmit={handleVerify}>
            {/* Input Fields */}
            <div className="flex justify-center space-x-2 sm:space-x-4 my-6">
                {otp.map((_, index) => (
                    <div className="flex justify-center items-center text-2xl sm:text-3xl bg-#3D624F0F border-2 rounded-[20px] border-#14B05D w-10 h-14 sm:w-12 sm:h-16 m-1">
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={otp[index]}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="otp-input bg-transparent text-center w-full h-full"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <p className="font-medium text-sm sm:text-base md:text-lg font-inter mb-2">
                    VALID FOR 3 MINUTES
                </p>
            </div>

            <div className="flex justify-center my-6">
                {isLoading && <button disabled className="bg-green-400 border-2 rounded-lg border-black w-48 h-14 sm:w-56 sm:h-16 shadow-md">
                    <p className="font-medium text-sm sm:text-base">LOADING</p>
                </button>}
                {!isLoading && <button className="bg-#2BE784 border-2 rounded-lg border-black w-48 h-14 sm:w-56 sm:h-16 shadow-md">
                    <p className="font-medium text-sm sm:text-base">VERIFY AND CONTINUE</p>
                </button>}
            </div>
        </form>

        {/* submitting code handling */}
        <div className="flex justify-center">
            {invalid && <InvalidFields invalidMessage={invalid}  />}
        </div>
        {success && <SuccessMessage handleDismiss={handleDismiss} successMessage = {success} />}

        {error && <ErrorMessage handleDismiss={handleDismiss} errorMessage={error} />}
    </div>
    );
}

export default PasswordVerification;