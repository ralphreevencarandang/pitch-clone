
export default function Step1(){
    return(
        <div className="bg-secondary w-full flex justify-center items-center flex-col padding-x">
            <div className="max-container text-center py-[80px] ">
                <h3 className="text-white text-2xl pb-2 font-display">Step 1</h3>
                <h2 className="text-white text-4xl mb-5 font-display">How many guests?</h2>
                <p className="lg:w-[830px] text-white  break-words">Let us know how many people you need to accommodate - your best guess at this stage is fine</p>
                <input type="range" min="1" max="100"  className="w-5/6  bg-yellow-500  rounded-full accent-yellow-500 " />
            </div>
        </div>
    );
}