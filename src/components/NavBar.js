import { Link } from "react-router-dom";

import logoImg from "../images/logo.png"
import searchIcon from "../images/Frame 5.png"

const NavBar = ({handleDropDownMenu}) => {
    return ( 
        <header className="bg-light-blue sticky top-0 z-1000">
            <section className="mx-4 p-4 flex justify-between items-center h-[79px]">
                {/* logo */}
                <div className="flex md:border-r-[2px] lg:border-r-[2px] xl:border-r-[2px]">
                    <img src={logoImg} alt="" className="w-[69px] h-[57px]"/>
                    <h1 className="text-md font-[500] text-center text-#EEF9F3
                                    xl:text-xl xl:w-72 xl:h-12">THE CONSTRUCTION AND LANDSCAPING COMPANY </h1>
                </div>
                <nav className="hidden text-#EEF9F3 font-bold text-center
                                sm:text-[16px]
                                md:block md:space-x-2 md:text-[20px]
                                lg:block lg:space-x-4 lg:text-[24px]
                                xl:block xl:space-x-8 xl:text-[24px]">
                    <Link to="/" className="hover:underline transition h-12">HOME </Link>
                    <Link to="/about us" className="hover:underline  h-12">ABOUT US </Link>
                    <Link to="/projects" className="hover:underline  h-12">PROJECTS </Link>
                </nav>
                {/* search bar */}
                <div className="hidden items-center bg-[#EEF9F3E5] border rounded-[10px] h-[46px]
                                md:flex md:w-[228px]
                                lg:flex lg:w-[298px]
                                xl:flex xl:w-[338px]">
                    <img src={searchIcon} alt="Search Icon" className="w-[21px] h-[21px] ml-3" />
                    <input type="text" className="bg-transparent border-none w-full h-full pl-3 text-[15px] text-#121C17 font-[500] focus:outline-none" placeholder="SEARCH..." />
                </div>
                {/* menu and menu icon */}
                <div className="flex">
                    <div onClick={handleDropDownMenu} className="flex flex-col cursor-pointer m-2">
                        <div className="bg-#EEF9F3 w-10 h-1 m-1"></div>
                        <div className="bg-#EEF9F3 w-7 h-1 m-1"></div>
                        <div className="bg-#EEF9F3 w-10 h-1 m-1"></div>
                    </div>
                    <button onClick={handleDropDownMenu} className="hidden xl:block m-2 space-x-8 text-[24px] text-#EEF9F3 font-bold text-center">MENU</button>
                </div>
                {/* book now button */}
                <button className="hidden xl:block w-[153px] h-[64px] bg-#59ED9F border-[3px] border-#EEF9F3E5 rounded-[10px] text-[20px] font-[500]">BOOK NOW</button>
            </section>
        </header>
    );
}

export default NavBar;