const ConfirmMessage = ({handleLogout, handleDismiss}) => {
    return ( 
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-#EEF9F3 rounded-[40px] shadow-lg p-8 w-[300px] md:w-[500px]">
                <p className="text-center text-[20px] font-inter text-#3D624F mt-4 font-[500]">
                    ARE YOU SURE YOU WANT TO LOGOUT?
                </p>
                {/* line */}
                <div className='md:w-[85%] m-8 bg-#121C17 h-[2px]'></div>
                <div className="flex ">
                    <button
                        onClick={handleLogout}
                        className="block w-full text-[20px] mt-6 text-#2BE784 py-2 font-[700] border-r-2 bottom-2 border-neutral-800">Yes
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="block w-full text-[20px] mt-6 text-#2BE784 py-2 font-[700]">No
                    </button>
                </div>
            </div>
        </div>
    </>
    );
}

export default ConfirmMessage;