import { Link } from "react-router-dom";
import DropDownMenu from "../components/DropDownMenu";


import homeResources from "../Resources/homeResources";
import searchIcon from "../images/Frame 5.png"

const Home = ({isDropDownMenu}) => {
    return ( 
        <>
        <div className="bg-#FFFFFF">
             {/* drop down menu */}
                <DropDownMenu isDropDownMenu = {isDropDownMenu} />
            {/* main image with text */}
            <div className="relative">
                <img src={homeResources.homeImg} alt="main img" className="w-full h-auto" />
                <img src={homeResources.effect} alt="effect" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-lato font-bold text-#FFFFFF 2xl:sm:p-16 2xl:sm:m-16
                    text-base
                    sm:text-2xl
                    md:text-3xl
                    lg:text-3xl
                    xl:text-4xl
                    2xl:text-4xl">
                    <p>TRANSFORM YOUR VISION INTO REALITY WITH OUR EXPERT CONSTRUCTION AND LANDSCAPING SERVICES WHERE QUALITY MEETS CREATIVITY.</p>
                    {/* search bar */}
                    <div className="hidden items-center bg-[#EEF9F3E5] border rounded-[10px] h-[46px] m-8
                                md:flex md:w-[228px]
                                lg:flex lg:w-[298px]
                                xl:flex xl:w-[338px]">
                        <img src={searchIcon} alt="Search Icon" className="w-[21px] h-[21px] ml-3" />
                        <input type="text" className="bg-transparent border-none w-full h-full pl-3 text-[15px] text-#121C17 font-[500] focus:outline-none" placeholder="SEARCH..." />
                    </div>
                </div>
            </div>

            {/* interior cladding */}
            <div>
                <div className="bg-#0E7E83 bg-opacity-50 w-full flex items-center
                    h-20
                    sm:h-28
                    md:h-32
                    lg:h-36
                    xl:h-40
                    2xl:h-44">
                    <p className="font-lato text-#121C17 font-[400] p-14 
                        text-3xl
                        sm:text-4xl
                        md:text-5xl
                        lg:text-5xl
                        xl:text-6xl
                        2xl:text-6xl
                    ">INTERIOR CLADDING</p>
                </div>

                {/* floors */}
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center">
                        <div className="bg-#031C1D w-12 h-8
                        "></div>
                        <p className="my-12 m-12 font-lato text-#121C17 font-[400] flex items-center 
                            text-2xl
                            sm:text-5xl
                            md:text-5xl
                            lg:text-5xl
                            xl:text-6xl
                            2xl:text-6xl
                        ">FLOORS</p>
                    </div>
                    <div className="bg-#074143 text-#EEF9F3 p-2 w-48 h-20 text-center flex justify-around items-center rounded-lg m-4
                        text-lg
                        sm:text-xl
                        md:text-xl
                        lg:text-2xl
                        xl:text-2xl
                        2xl:text-2xl
                    ">
                        <button  className="hidden sm:hidden md:block lg:block xl:block 2xl:block">VIEW ALL</button>
                        <img src={homeResources.viewAllIcon} alt="view icon" className="w-6 h-6" />
                    </div>
                </div>
                <Link to={"product/:id"}> product details</Link>
                <div className="flex">
                    <div className="flex overflow-x-scroll ">
                        {homeResources.floors.map((floor, index) => (
                            <img key={index} src={floor} alt={`floor ${index + 1}`} className="mx-12 w-96 h-72" />
                        ))}
                    </div>
                </div>
                
                {/* walls */}
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center">
                        <div className="bg-#031C1D w-12 h-8"></div>
                        <p className="my-12 m-12 font-lato text-#121C17 font-[400]  flex items-center
                            text-2xl
                            sm:text-5xl
                            md:text-5xl
                            lg:text-5xl
                            xl:text-6xl
                            2xl:text-6xl
                        ">WALLS</p>
                    </div>
                    <div className="bg-#074143 text-#EEF9F3 text-2xl p-2 w-48 h-20 text-center flex justify-around items-center rounded-lg m-4">
                        <button  className="hidden sm:hidden md:block lg:block xl:block 2xl:block">VIEW ALL</button>
                        <img src={homeResources.viewAllIcon} alt="view icon" className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex overflow-x-scroll">
                        {homeResources.walls.map((wall, index) => (
                            <img key={index} src={wall} alt={`walls ${index + 1}`} className="mx-12 w-96 h-72" />
                        ))}
                    </div>
                </div>

                {/* faucets */}
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center">
                        <div className="bg-#031C1D w-12 h-8"></div>
                        <p className="my-12 m-12 font-lato text-#121C17 font-[400]  flex items-center
                            text-2xl
                            sm:text-5xl
                            md:text-5xl
                            lg:text-5xl
                            xl:text-6xl
                            2xl:text-6xl
                        ">FAUCETS</p>
                    </div>
                    <div className="bg-#074143 text-#EEF9F3 text-2xl p-2 w-48 h-20 text-center flex justify-around items-center rounded-lg m-4">
                        <button  className="hidden sm:hidden md:block lg:block xl:block 2xl:block">VIEW ALL</button>
                        <img src={homeResources.viewAllIcon} alt="view icon" className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex overflow-x-scroll">
                        {homeResources.faucets.map((faucet, index) => (
                            <img key={index} src={faucet} alt={`faucet ${index + 1}`} className="mx-12 w-96 h-72" />
                        ))}
                    </div>
                </div>

                {/* kitchens */}
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center">
                        <div className="bg-#031C1D w-12 h-8"></div>
                        <p className="my-12 m-12 font-lato text-#121C17 font-[400]  flex items-center
                            text-2xl
                            sm:text-5xl
                            md:text-5xl
                            lg:text-5xl
                            xl:text-6xl
                            2xl:text-6xl
                        ">KITCHENS</p>
                    </div>
                    <div className="bg-#074143 text-#EEF9F3 text-2xl p-2 w-48 h-20 text-center flex justify-around items-center rounded-lg m-4">
                        <button  className="hidden sm:hidden md:block lg:block xl:block 2xl:block">VIEW ALL</button>
                        <img src={homeResources.viewAllIcon} alt="view icon" className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex overflow-x-scroll">
                        {homeResources.kitchens.map((kitchen, index) => (
                            <img key={index} src={kitchen} alt={`kitchen ${index + 1}`} className="mx-12 w-96 h-72" />
                        ))}
                    </div>
                </div>
            </div>

            {/* landscaping department */}
            <div>
                <div className="bg-#59ED9F bg-opacity-70 w-full my-16 flex items-center
                    h-20
                    sm:h-28
                    md:h-32
                    lg:h-36
                    xl:h-40
                    2xl:h-44
                ">
                        <p className="font-lato text-#121C17 font-[400] p-14
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-5xl
                            xl:text-6xl
                            2xl:text-6xl
                        ">LANDSCAPING DEPARTMENT</p>
                </div>

                {/* shrubs */}
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center">
                        <div className="bg-#14B05D w-12 h-8"></div>
                        <p className="my-12 m-12 font-lato text-#121C17 font-[400]  flex items-center
                            text-2xl
                            sm:text-5xl
                            md:text-5xl
                            lg:text-5xl
                            xl:text-6xl
                            2xl:text-6xl
                        ">SHRUBS</p>
                    </div>
                    <div className="bg-#14B05D text-#121C17 text-2xl p-2 w-48 h-20 text-center flex justify-around items-center rounded-lg m-4">
                        <button  className="hidden sm:hidden md:block lg:block xl:block 2xl:block">VIEW ALL</button>
                        <img src={homeResources.viewAllIconDark} alt="view icon" className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex overflow-x-scroll ">
                        {homeResources.shrubs.map((shrub, index) => (
                            <img key={index} src={shrub} alt={`shrub ${index + 1}`} className="mx-12 w-96 h-72" />
                        ))}
                    </div>
                </div>

                {/* pavements */}
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center">
                        <div className="bg-#14B05D w-12 h-8"></div>
                        <p className="my-12 m-12 font-lato text-#121C17 font-[400]  flex items-center
                            text-2xl
                            sm:text-5xl
                            md:text-5xl
                            lg:text-5xl
                            xl:text-6xl
                            2xl:text-6xl
                        ">PAVEMENTS</p>
                    </div>
                    <div className="bg-#14B05D text-#121C17 text-2xl p-2 w-48 h-20 text-center flex justify-around items-center rounded-lg m-4">
                        <button  className="hidden sm:hidden md:block lg:block xl:block 2xl:block">VIEW ALL</button>
                        <img src={homeResources.viewAllIconDark} alt="view icon" className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex overflow-x-scroll ">
                        {homeResources.pavements.map((pavement, index) => (
                            <img key={index} src={pavement} alt={`pavement ${index + 1}`} className="mx-12 w-96 h-72" />
                        ))}
                    </div>
                </div>
            </div>

            <div>
                {/* about us and our services */}
                <div className="bg-#0E7E83 bg-opacity-50 w-full mt-16 flex items-center
                    h-20
                    sm:h-28
                    md:h-32
                    lg:h-36
                    xl:h-40
                    2xl:h-44
                ">
                    <p className="font-lato text-#121C17 font-[400] p-14 
                        text-3xl
                        sm:text-4xl
                        md:text-5xl
                        lg:text-5xl
                        xl:text-6xl
                        2xl:text-6xl
                    ">ABOUT US AND OUR SERVICES</p>
                </div>

                {/* paragraphs */}
                <div className="w-screen
                        sm:flex max-lg:sm:flex-col
                        md:flex max-xl:md:flex-col
                        xl:flex xl:justify-evenly
                        2xl:flex 2xl:justify-evenly">
                    {/* first section */}
                    <section className="mx-16 w-[80%]">
                        <div className="my-8">
                            <p className="font-lato text-#031C1D font-bold text-2xl">WELCOME</p>
                            <p className="font-lato text-#031C1D text-xl">TO Z AND N CONSTRUCTION AND LANDSCAPING, WHERE QUALITY MEETS CREATIVITY. FOUNDED WITH A PASSION FOR TRANSFORMING OUTDOOR SPACES AND BUILDING LASTING STRUCTURES, WE ARE DEDICATED TO PROVIDING EXCEPTIONAL SERVICES THAT ENHANCE BOTH THE BEAUTY AND FUNCTIONALITY OF YOUR PROPERTY.</p>
                        </div>

                        <div className="my-8">
                            <p className="font-lato text-#031C1D font-bold text-2xl">OUR MISSION</p>
                            <p className="font-lato text-#031C1D text-xl">AT Z AND N, OUR MISSION IS TO DELIVER HIGH-QUALITY CONSTRUCTION AND LANDSCAPING SOLUTIONS TAILORED TO MEET THE UNIQUE NEEDS OF OUR CLIENTS. WE BELIEVE IN CREATING SPACES THAT REFLECT YOUR VISION WHILE ENSURING DURABILITY AND SUSTAINABILITY.</p>
                        </div>

                        <div>
                            <p className="font-lato text-#031C1D font-bold text-2xl">OUR TEAM</p>
                            <p className="font-lato text-#031C1D text-xl">T
                            OUR EXPERIENCED TEAM OF PROFESSIONALS BRINGS A WEALTH OF KNOWLEDGE AND EXPERTISE TO EVERY PROJECT. FROM SKILLED LANDSCAPERS TO EXPERT BUILDERS, WE WORK COLLABORATIVELY TO ENSURE THAT EACH JOB IS COMPLETED TO THE HIGHEST STANDARDS. WE PRIDE OURSELVES ON OUR ATTENTION TO DETAIL, COMMITMENT TO EXCELLENCE, AND PASSION FOR OUR CRAFT.</p>
                        </div>
                    </section>
                    {/* second section */}
                    <section className="mx-16 w-[80%]">
                        <div className="my-8">
                            <p className="font-lato text-#031C1D font-bold text-2xl">WHAT WE OFFER</p>
                            <p className="font-lato text-#031C1D text-xl">
                            CONSTRUCTION SERVICES: FROM RESIDENTIAL PROJECTS TO COMMERCIAL BUILDS, WE HANDLE EVERYTHING FROM DESIGN TO EXECUTION, ENSURING A SEAMLESS CONSTRUCTION PROCESS.
                            LANDSCAPING SERVICES: OUR LANDSCAPING TEAM SPECIALIZES IN CREATING BEAUTIFUL GARDENS, PATIOS, AND OUTDOOR LIVING SPACES THAT ENHANCE YOUR PROPERTY’S APPEAL.</p>
                        </div>

                        <div className="my-8">
                            <p className="font-lato text-#031C1D font-bold text-2xl">WHY CHOOSE US?</p>
                            <p className="font-lato text-#031C1D text-xl">QUALITY CRAFTSMANSHIP: WE USE ONLY THE BEST MATERIALS AND TECHNIQUES TO ENSURE LASTING RESULTS.
                            CUSTOMER-CENTRIC APPROACH: YOUR SATISFACTION IS OUR PRIORITY. WE LISTEN TO YOUR NEEDS AND WORK CLOSELY WITH YOU THROUGHOUT THE PROJECT.
                            SUSTAINABLE PRACTICES: WE ARE COMMITTED TO ENVIRONMENTALLY FRIENDLY PRACTICES THAT BENEFIT BOTH OUR CLIENTS AND THE PLANET.
                            JOIN US IN CREATING BEAUTIFUL, FUNCTIONAL SPACES THAT YOU CAN CHERISH FOR YEARS TO COME. AT Z AND N CONSTRUCTION AND LANDSCAPING, WE TURN YOUR DREAMS INTO REALITY.</p>
                        </div>
                    </section>
                </div>

                {/* video */}
                {/* <div className="w-[1696px] h-[643px]">
                    <video src=""></video>
                </div> */}

                {/* Business exhibition*/}
                <div className="bg-#0E7E83 bg-opacity-50 w-screen h-44 mt-16">
                    <p className="font-lato text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-#121C17 font-[400] p-14 flex items-center w-auto">BUSINESS EXHIBITION</p>
                </div>
                <div className="bg-#0E7E83 bg-opacity-50">
                    <div className="
                        sm:flex max-lg:sm:flex-col
                        md:flex max-xl:md:flex-col
                        xl:flex xl:justify-evenly
                        2xl:flex 2xl:justify-evenly">
                        {/* interior */}
                        {/* section 1 */}
                        <section className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[40%] 2xl:w-[40%]">
                            <div className="bg-#EEF9F3 w-full m-4">
                                <div className="flex justify-between">
                                    <p className="my-12 m-12 font-lato text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-#121C17 font-bold flex items-center ">INTERIOR</p>
                                    <div className="bg-#074143 text-#EEF9F3 text-2xl p-2 text-center flex justify-around items-center rounded-lg m-4
                                        w-16 h-16
                                        sm:w-16 sm:h-16
                                        md:w-48 md:h-20
                                        lg:w-48 lg:h-20 
                                        xl:w-48 xl:h-20 
                                        2xl:w-48 2xl:h-20">
                                        <button className="hidden sm:hidden md:block lg:block xl:block 2xl:block">VIEW ALL</button>
                                        <img src={homeResources.viewAllIcon} alt="view icon" className="w-6 h-6" />
                                    </div>
                                </div>
                                {/* images */}
                                <div className="grid grid-cols-2">
                                    {homeResources.interiors.map((interior, index) => (
                                        <img src={interior} alt={`interior ${index + 1}`} key={index} className="w-[90%] h-[80%] m-4" />
                                    ))}
                                </div>
                            </div>
                        </section>  

                        {/* exterior */}
                        {/* section 2 */}
                        <section className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[40%] 2xl:w-[40%]">
                            <div className="bg-#EEF9F3 w-full m-4">
                                <div className="flex justify-between">
                                    <p className="my-12 m-12 font-lato text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-#121C17 font-bold flex items-center ">EXTERIOR</p>
                                    <div className="bg-#074143 text-#EEF9F3 text-2xl p-2 text-center flex justify-around items-center rounded-lg m-4
                                        w-16 h-16
                                        sm:w-16 sm:h-16
                                        md:w-48 md:h-20
                                        lg:w-48 lg:h-20 
                                        xl:w-48 xl:h-20 
                                        2xl:w-48 2xl:h-20">
                                        <button className="hidden sm:hidden md:block lg:block xl:block 2xl:block">VIEW ALL</button>
                                        <img src={homeResources.viewAllIcon} alt="view icon" className="w-6 h-6" />
                                    </div>
                                </div>
                                {/* images */}
                                <div className="grid grid-cols-2">
                                    {homeResources.exteriors.map((exterior, index) => (
                                        <img src={exterior} alt={`exterior ${index + 1}`} key={index} className="w-[90%] h-[80%] m-4" />
                                    ))}
                                </div>
                            </div>
                        </section>  
                    </div>
                    {/* details */}
                    <div className="
                        sm:flex max-lg:sm:flex-col sm:items-center
                        md:flex max-xl:md:flex-col md:items-center
                        xl:flex xl:justify-between
                        2xl:flex 2xl:justify-between">
                        <p className="my-12 2xl:m-12 font-lato md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-#121C17 font-bold  flex items-center">CONTACT US</p>

                        <div className="bg-transparent flex m-4">
                            <div className="flex justify-center items-center mx-3">
                                <img src={homeResources.locationIcon} alt="location icon" className="w-7 h-6 justify-center" />
                            </div>
                            <p className="font-lato md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-#121C17 font-bold  flex items-center">1234 Greenway Drive <br /> Springfield, IL 62701 </p>
                        </div>

                        <div className="bg-transparent flex justify-between m-4">
                            <div className="flex justify-center items-center mx-3">
                                <img src={homeResources.whatsappIcon} alt="whatsapp icon" className="w-7 h-6 justify-center" />
                            </div>
                            <p className="font-lato md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-#121C17 font-bold  flex items-center">(555) 123-4567 </p>
                        </div>

                        
                        <div className="bg-transparent flex justify-between mr-12 m-4">
                            <div className="flex justify-center items-center mx-3">
                                <img src={homeResources.mailIcon} alt="whatsapp icon" className="w-7 h-6 justify-center" />
                            </div>
                            <p className=" font-lato md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-#121C17 font-bold  flex items-center">info@zandnconstruction.com</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gradient-to-b from-#074143 to-#031C1D w-full h-auto py-10 flex flex-col items-center lg:flex-row lg:justify-between">
                    {/* First Section */}
                    <section className="flex flex-col items-center m-4 lg:items-start lg:flex-row">
                        <div className="flex items-center mb-4 lg:mb-0 lg:mr-4">
                            <img src={homeResources.logo} alt="logo" className="w-24 h-16"/>
                            <h1 className="text-md font-[500] text-center text-#EEF9F3 xl:text-lg xl:w-72 xl:h-12">
                                THE CONSTRUCTION AND LANDSCAPING COMPANY
                            </h1>
                        </div>
                        <div className="flex space-x-4">
                            <Link>
                                <img src={homeResources.facebookLogo} alt="facebook Logo" className="m-2"/>
                            </Link>
                            <Link>
                                <img src={homeResources.instagramLogo} alt="instagram Logo" className="m-2"/>
                            </Link>
                        </div>
                    </section>

                    {/* Second Section */}
                    <section className="flex flex-col items-center m-4 text-center lg:text-left">
                        <p className="font-lato text-lg text-#EEF9F3 font-bold mb-4">BUSINESS HOURS:</p>
                        <p className="font-lato text-lg text-#EEF9F3 font-[500]">
                            MONDAY - FRIDAY: 8 AM - 6 PM <br />
                            SATURDAY: 9 AM - 4 PM <br />
                            SUNDAY: CLOSED
                        </p>
                    </section>

                    {/* Third Section */}
                    <section className="flex flex-col items-center m-4 text-center lg:text-left">
                        <p className="font-lato text-lg text-#EEF9F3 font-bold mb-4">QUICK LINKS:</p>
                        <ul className="font-lato text-lg text-#EEF9F3 font-[500] space-y-2">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about us">ABOUT US</Link></li>
                            <li><Link to="/services">SERVICES</Link></li>
                            <li><Link to="/projects">PROJECTS</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </section>

                    {/* Fourth Section */}
                    <section className="flex flex-col items-center m-4 text-center lg:text-left lg:w-1/3">
                        <p className="font-lato text-lg text-#EEF9F3 font-bold mb-4">AWARDS AND CERTIFICATIONS:</p>
                        <ul className="font-lato text-lg text-#EEF9F3 font-[500] space-y-4">
                            <li>"PROUD MEMBER OF THE NATIONAL ASSOCIATION OF LANDSCAPE PROFESSIONALS"</li>
                            <li>"CERTIFIED GREEN BUILDER"</li>
                        </ul>
                    </section>
                </footer>
                <p className="font-lato text-xl text-#EEF9F3 font-bold text-center mt-6">
                    © 2024 Z and N Construction and Landscaping. All rights reserved.
                </p>
            </div>
        </div>
        </>
    );
}

export default Home;