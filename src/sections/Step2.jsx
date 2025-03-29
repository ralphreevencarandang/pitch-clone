import PackagesCard from "../components/PackagesCard";
import { packagesCard } from "../constant";
import {useState} from "react";

export default function Step2(){

    const initialValues = packagesCard.map(() => "1");
    const [packageValues, setPackageValues] = useState(initialValues);



    function handleChange(event, index) {
        const newValues = [...packageValues]; 
        newValues[index] = event.target.value;
        setPackageValues(newValues);
    }

    return(
        <div className=" text-center flex flex-col justify-center items-center">
            <h3 className="text-black-font text-2xl pb-2 font-display">Step 2</h3>
            <h2 className="text-4xl mb-5 text-black-font font-display">What do you need?</h2>
            <p className="lg:w-[830px] text-black-font text-lg">Tell us which of our three packages you're interested in, see our Packages page for more detail of what's included in each one</p>
       
            <div className="flex justify-center items-center  max-sm:flex-col">
                {packagesCard.map((card, index)=>
                    <div key={index}>
                        <PackagesCard {...card}/>
                        <input type="text" className="border-2 border-black w-10 h-10 text-center text-slate-600 text-lg mt-3 rounded cursor-pointer" value={packageValues[index]} onChange={(event) => handleChange(event, index)} />
        
                    </div>
                )}
            </div>
          
                
        </div>
    );
}