import { ctaBg } from "../assets/images";
import Button from "../components/Button";

export default function ReadyToPitch() {
    return (
        <div className="relative max-lg:py-20 md:p-10    border-dashed flex justify-center items-center"> 
            <img src={ctaBg} alt="Ready to Pitch Background" className="max-md:hidden "/>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center py-10">
                <h3 className="text-white text-2xl text-center pb-7 font-semibold font-display ">Ready to Pitch?</h3>
                <Button label="START PLANNING YOUR TRIP"/>
            </div>
         </div>

    );
}