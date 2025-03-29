
import { logoCombined } from "../assets/images";
import Button from "../components/Button";

export default function Step3() {
  return (
    <div className="padding w-full flex justify-center items-center flex-col">

        <div className="bg-primary rounded-full  p-2">
            <div className="w-[100px] h-[100px]  "> 
                <img src={logoCombined} alt="logo"  className=" w-full h-full bg-white rounded-full " />
            </div>
        </div>
     

        <div className="text-center text-white pb-10">
            <h3 className="text-2xl pb-2 font-display">Step 3</h3>
            <h2 className="text-4xl mb-5 font-display ">Where are you going?</h2>
            <p className="lg:w-[830px] text-lg">
            Tell us where and when you'd like to Pitch, and how we can contact you
            </p>
        </div>

        <div className=" grid grid-cols-2  gap-x-10 bg-secondary px-15 py-20 max-lg:grid-cols-1 max-container rounded-2xl">
            
            <div className="w-full">
                <h3 className="text-white text-3xl font-semibold font-display">About your trip</h3>

                <div className="flex gap-2 max-lg:flex-col">
                    <div className="">
                        <label className="text-white font-bold ">
                            From <span className="text-primary ">*</span>
                        </label>
                        <input type="date" className="booking-input my-2" />
                    </div>

                    <div>
                        <label className="text-white font-bold s">
                            To <span className="text-primary">*</span>
                        </label>
                        <input type="date" className="booking-input my-2" /> 
                    </div>
                </div>
                
                <div className="w-full">
                    <label className="text-white font-bold">Where shall we pitch? <span className="text-primary">*</span></label><br />
                    <input type="text" className="booking-input my-2" placeholder="Postcode or town"/> <br />
                    <label className="text-white font-bold">Purpose (to help us make it personal to you) </label><br />
                    <input type="text" className="booking-input my-2" placeholder="Postcode or town"/>
                </div>
                

            </div>

            <div className="text-white">
                <h3 className="text-3xl font-semibold font-display">About you</h3>
                <label className="font-bold">
                    Name <span className="text-primary">*</span>
                </label>
                <input type="text" className="booking-input my-2" />
                <label className="font-bold">
                    Email <span className="text-primary">*</span>
                </label>
                <input type="text" className="booking-input my-2" />
                <label className="font-bold">
                    Phone Number 
                </label>
                <input type="text" className="booking-input my-2" />
                <label className="font-bold">
                    Mobile Number
                </label>
                <input type="text" className="booking-input my-2" />
            </div>

            <div className="lg:col-span-2">
                <label className="text-white font-bold">Extra Comment</label>
                <textarea  id="" cols="30" rows="5" className="bg-white booking-input my-2" placeholder="Extra Comments"></textarea>
            </div>
        </div>

        <div className="pt-10">

            <Button label="SUBMIT"/>
        </div>

    </div>

  );
}
