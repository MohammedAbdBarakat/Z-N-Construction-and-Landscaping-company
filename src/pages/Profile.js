import ConfirmMessage from "../components/ConfirmMessage"
import DropDownMenu from "../components/DropDownMenu";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
//images
import mainImg from "../images/Rectangle 30.png"
import effect from "../images/Rectangle 31.png"
import profileAvatar from "../images/Ellipse 10.png"
import grassImg from "../images/pale-85 1.png"
import logoutImg from "../images/Vector.png"

import { useEffect, useState } from "react"

const Profile = ({isDropDownMenu}) => {
    const { user } = useAuthContext();
    const {logout, isLoading, error, setError, success, setSuccess, invalid} = useLogout()

    const [isConfirmLoggingOut,setIsConfirmLoggingOut] = useState(false)

    const handleLogoutButton = () => {
        setIsConfirmLoggingOut(true)
    }
    const handleLogout = async () => {
        await logout()
    };
    const handleDismiss = () => {
        setIsConfirmLoggingOut(false)
    }

    useEffect(() => {
        console.log(user);
    })

    return (
        <>
        <div className="bg-#EEF9F3 flex flex-col">
            {/* drop down menu */}
            <DropDownMenu isDropDownMenu = {isDropDownMenu} />
            {/* main image */}
            <div className="relative">
                <img src={mainImg} alt="Main Image" className="block w-full h-auto" />
                <img src={effect} alt="Effect Overlay" className="absolute inset-0 w-full h-full" />
            </div>
            {/* profile avatar */}
            <div className="absolute top-[30%] w-[70px] m-2
                            sm:top-[30%] sm:w-[100px] sm:m-4
                            md:top-[30%] md:w-[120px] md:m-4
                            lg:top-[30%] lg:w-[200px] lg:m-8
                            xl:top-[30%] xl:w-[200px] xl:m-8
                            2xl:top-[40%] 2xl:w-[240px] 2xl:m-12">
                <img src={profileAvatar} alt="Profile Avatar"/>
            </div>
            {/* second div */}
            <div className="flex w-full">
                {/* personal info */}
                <div className="w-[50%] ">
                    <div className=" text-#14B05D w-auto h-auto py-16 text-[20px] 2xl:text-[26px] 2xl:p-16 font-[700] text-end">
                        <p className="m-8">NAME</p>
                        <p className="m-8">COUNTRY</p>
                        <p className="m-8">EMAIL</p>
                        <p className="m-8">PHONE NUMBER</p>
                    </div>
                </div>
                {/* user info */}
                <div className="w-[50%] h-full">
                    <div className="bg-#031C1D py-16 text-[20px] 2xl:text-[26px] 2xl:p-16">
                        <div className="text-#EEF9F3">
                            <p className="m-8">JAMES WILLIAMS</p>
                            <p className="m-8">USA - WASHINGTON, D.C.</p>
                            <p className="m-8">{ user.email }</p>
                            <p className="m-8">+1 202 555 1234</p>
                        </div>
                    </div>
                </div>
                {/* logout button */}
                <div className="relative">
                {!isLoading && <div className="absolute right-[20px] bottom-[20px]">
                    <div onClick={handleLogoutButton}
                        className="bg-#E55B5B text-#EEF9F3 border-2 rounded-[10px] flex justify-around items-center p-1 w-[100px] 
                                    2xl:w-[200px] 2xl:h-[55px] cursor-pointer ">
                        <img src={logoutImg} alt="logout image" className="2xl:w-[40px] 2xl:h-[36px]" />
                        <button>LOGOUT</button>
                    </div>
                </div>}
                {isLoading && <div className="absolute right-[20px] bottom-[20px]">
                    <div onClick={handleLogoutButton}
                        className="bg-#E55B5B text-#EEF9F3 border-2 rounded-[10px] flex justify-around items-center p-1 w-[100px] 
                                    2xl:w-[200px] 2xl:h-[55px] cursor-pointer ">
                        <img src={logoutImg} alt="logout image" className="2xl:w-[40px] 2xl:h-[36px]" />
                        <button disabled>LOADING...</button>
                    </div>
                </div>}
                </div>
            </div>
            {/* grass image */}
            <div className="relative">
                <div className="hidden 2xl:block 2xl:absolute 2xl:bottom-[0px] 2xl:left-[10px] z-10">
                    <img src={grassImg} alt="grass image" className="2xl:w-[408px] 2xl:h-[275px]" />
                </div>
            </div>
            {isConfirmLoggingOut && <ConfirmMessage handleLogout={handleLogout} handleDismiss={handleDismiss} />}
        </div>
        </>
    );
}

export default Profile;