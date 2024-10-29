import { Link } from "react-router-dom";

import searchIcon from "../images/Frame 5.png"

const DropDownMenu = ({isDropDownMenu}) => {
    return ( 
        <>
        <div className={`absolute bg-[#EEF9F3] font-inter text-center rounded-s-[25px] shadow-lg p-4 mt-2 ml-4 z-20
                        w-48 h-[50%] right-16 overflow-y-scroll
                        sm:w-56 sm:right-16 
                        md:w-60 md:right-16 md:h-auto md:overflow-hidden
                        lg:w-64 lg:right-16 lg:h-auto lg:overflow-hidden
                        xl:w-72 xl:right-80 xl:h-auto xl:overflow-hidden
                        2xl:w-80 2xl:right-96 2xl:h-auto 2xl:overflow-hidden
                        transition-all duration-300 ease-in-out transform ${
                        isDropDownMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
            <div className="flex items-center bg-[#EEF9F3E5] border rounded-[10px] h-[46px]
                                md:hidden
                                lg:hidden
                                xl:hidden">
                <img src={searchIcon} alt="Search Icon" className="w-[21px] h-[21px] ml-3" />
                <input type="text" className="bg-transparent border-none w-full h-full pl-3 text-[15px] text-#121C17 font-[500] focus:outline-none" placeholder="SEARCH..." />
            </div>

            <Link to="/" className="block sm:text-sm font-inter text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded
                        md:hidden lg:hidden xl:hidden 2xl:hidden">HOME </Link>
            <Link to="/about us" className="block sm:text-sm font-inter text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded
                        md:hidden lg:hidden xl:hidden 2xl:hidden">ABOUT US </Link>
            <Link to="/projects" className="block sm:text-sm font-inter text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded
                        md:hidden lg:hidden xl:hidden 2xl:hidden">PROJECTS </Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">LANDSCAPING</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">DECKING</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">GARDENING</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">INTERLOCKING</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">FLORAL DESIGN</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">POOLS</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">RAILINGS</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">WOODWORKING</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">SHOWROOM</Link>
            <Link to={"/profile"} className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">PROFILE</Link>
            <Link className="block font-inter sm:text-sm lg:md:text-base 2xl:xl:text-lg text-[#121C17] py-2 px-4 hover:bg-[#d1e8db] rounded">CONTACT US</Link>
            <button className="block w-32 bg-#59ED9F border-[3px] border-#EEF9F3E5 rounded-[10px] text-sm font-[500] m-4 p-1
                        md:hidden
                        lg:hidden
                        xl:hidden
                        2xl:hidden">BOOK NOW</button>
        </div>
        </>
    );
}

export default DropDownMenu;