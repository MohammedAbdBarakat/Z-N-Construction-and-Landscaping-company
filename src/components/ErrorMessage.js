const AlertMessage = ({handleDismiss}) => {

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-#EEF9F3 rounded-[40px] shadow-lg p-8 w-[300px] md:w-[500px]">
                    <h2 className="text-center text-[40px] font-bold text-#121C17">ERROR</h2>
                    <p className="text-center text-[20px] font-inter text-#3D624F mt-4 font-[500]">
                        Please wait a few minutes before you try again.
                    </p>
                    {/* line */}
                    <div className='md:w-[85%] m-8 bg-#121C17 h-[2px]'>

                    </div>
                    <button
                        onClick={handleDismiss}
                        className="block w-full text-[20px] mt-6 text-#E55B5B py-2 font-[700]"
                    >
                        DISMISS
                    </button>
                </div>
            </div>
        </>
    );
};

export default AlertMessage;
