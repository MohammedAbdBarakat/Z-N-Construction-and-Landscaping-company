import invalidImg from "../images/Vector1.png"

const InvalidFields = ({invalidMessage}) => {
    return ( 
        <div className='bg-#EEF9F3 border-2 rounded-[5px] xl:w-[478px] xl:mx-16 xl:my-6 p-4 m-4 text-#D8814F border-#D8814F flex justify-center'>
            <img src={invalidImg} className='mx-2' />
            <p className='font-[500]'>{invalidMessage}</p>
        </div>
    );
}

export default InvalidFields;