import productDetailsResources from "../Resources/productDetailsResources";

const ProductDetails = () => {
    return ( 
        <>
        {/* banner */}
        <div className="w-screen h-96">
            <img src={productDetailsResources.banner} alt="banner" className="w-full h-full"/>
        </div>
        {/* product code */}
        <div className="bg-#0E7E83 flex items-center justify-end w-screen h-24">
            <p className="text-#EEF9F3 font-bold
                lg:text-5xl lg:mx-[50%]
                xl:text-5xl xl:mr-32
                2xl:text-5xl 2xl:mr-64
                ">PRODUCT CODE</p>
        </div>
        {/* product images */}
        <div className="relative">
            <div className="
                xl:absolute  xl:-bottom-36  xl:left-20
                2xl:absolute 2xl:-bottom-36 2xl:left-20
                ">
                <img src={productDetailsResources.floors[0]} alt="main product img" className="w-[649px] h-[505px]" />
            </div>
            <div className="
                xl:absolute xl:-bottom-96 xl:left-20
                2xl:absolute 2xl:-bottom-96 2xl:left-20
                ">
                <img src={productDetailsResources.floors[1]} alt="secondary product img" className="w-[215px] h-[214px] z-0" />
            </div>
            <div className="
                xl:absolute xl:-bottom-96 xl:left-20
                2xl:absolute 2xl:-bottom-96 2xl:left-20
                mx-[235px]">
                <img src={productDetailsResources.floors[2]} alt="secondary product img" className="w-[184px] h-[214px] z-0" />
            </div>
            <div className="
                xl:absolute xl:-bottom-96 xl:left-20
                2xl:absolute 2xl:-bottom-96 2xl:left-20
                mx-[435px]">
                <img src={productDetailsResources.floors[3]} alt="secondary product img" className="w-[215px] h-[214px] z-0" />
            </div>
        </div>
        {/* product details */}
        <div className="flex flex-col justify-end text-left w-[50%] ml-[50%] my-4">
            <p className="text-#121C17 text-4xl font-bold">KRONOSTEP Z209 SPC FLOORING, 4 MM, LIGHT SHADE, BUTTERSCOTCH OAK, TRAFFIC CLASS AC4, 1280 X 192 MM</p>
            {/* product specifications */}
            <div>
                <div className="flex items-center my-16">
                    <img src={productDetailsResources.prodTypeIcon} alt="product type icon" className="w-16 h-16 z-0"/>
                    <p className="text-#121C17 text-3xl font-[500]">PRODUCT TYPE: SPC FLOORING</p>
                </div>
                <div className="flex items-center my-16">
                    <img src={productDetailsResources.prodDecorIcon} alt="product type icon" className="w-16 h-16 z-0"/>
                    <p className="text-#121C17 text-3xl font-[500]">DECOR: BUTTERSCOTCH OAK</p>
                </div>
                <div className="flex items-center my-16">
                    <img src={productDetailsResources.prodShadeIcon} alt="product type icon" className="w-16 h-16 z-0"/>
                    <p className="text-#121C17 text-3xl font-[500]">SHADE: LIGHT</p>
                </div>
                <div className="flex items-center my-16">
                    <img src={productDetailsResources.prodBrandIcon} alt="product type icon" className="w-16 h-16 z-0"/>
                    <p className="text-#121C17 text-3xl font-[500]">BRANDl KRONOSPAN</p>
                </div>
            </div>
        </div>
        {/* product description */}
        <div className="p-4 mx-32">
            <p className="text-#121C17 text-4xl font-bold">PRODUCT DESCRIPTION:</p>
            <p className="text-#121C17 text-2xl font-[500] my-2 px-4">
                KRONOSTEP Z209 SPC FLOORING IS A PRACTICAL AND DECORATIVE FLOORING ALTERNATIVE. THE MODEL INTEGRATES EASILY INTO ANY TYPE OF ARRANGEMENT AND OFFERS AN ELEGANT AND WELCOMING APPEARANCE.
                BEING MADE OF QUALITY SPC, WITH TRAFFIC CLASS 32 AND AC4 WEAR, IT IS A DURABLE AND RESISTANT CHOICE, BOTH FOR HOMES AND COMMERCIAL SPACES WITH MEDIUM TRAFFIC.
                THE TILES ARE 4 MM THICK AND 1280 X 192 MM IN SIZE, AND THEIR JOINING CREATES A DURABLE FLOOR THAT CAN SUPPORT HEAVY FURNITURE, WITHOUT BEING DAMAGED OR DISCOLORED.
                THE PACKAGE CONTAINS 8 BOARDS WITH BUTTERSCOTCH OAK DECORATION, IN A LIGHT SHADE, COVERING AN AREA OF 1.96 SQUARE METERS.
            </p>

            <p className="text-#121C17 text-4xl font-bold mt-8">ADVANTAGES</p>
            <ul className="text-#121C17 text-2xl font-[500]">
                <li className="px-4 my-2">
                    - RESISTANCE TO LONG-TERM USE
                </li>
                <li className="px-4 my-2">
                    - DOES NOT REQUIRE SCRAPING OR VARNISHING
                </li>
                <li className="px-4 my-2">
                    - EASY TO MAINTAIN
                </li>
                <li className="px-4 my-2">
                    - FAST ASSEMBLY
                </li>
            </ul>
        </div>
        </>
    );
}

export default ProductDetails;