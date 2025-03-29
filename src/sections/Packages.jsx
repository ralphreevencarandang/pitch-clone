import Button from "../components/Button";
import {PackagesBanner} from "../assets/images";
import {packagesCard, packagesDetails} from "../constant";
import PackagesCard from "../components/PackagesCard";

import PackagesFeatures from "./PackagesFeatures";
import ReadyToPitch from "./ReadyToPitch";

export default function Packages() {
    return(
        <>

        <section className="flex justify-center flex-col items-center flex-wrap">
            <div className="max-container  padding-x padding-y">
                    <h1 className="text-5xl font-semibold py-10 font-display text-center">Packages</h1>
                    <img src={PackagesBanner} alt="Banner" className="w-full object-contain" />
                    <p className="text-center lg:w-[830px] text-lg text-black-font leading-tight">Choose from one of three different packages below to personalise your booking. Prices are dependent upon the total number of tents booked, the number of guests per tent and the tent size (4m or 5m).
                        Please <span className="text-primary">contact us</span> for more information, we’d love to hear from you!</p>
            
        
                <div className="flex  items-center justify-center max-sm:flex-col">
                    {packagesCard.map((card, index) => 
                        <div key={index}>
                            <PackagesCard  imgURL={card.imgURL} />
                            <Button  label={card.star}/>      
                        </div>
                        
                    )}
                </div>
            </div>


        </section>
           


            <section className=" w-full  ">
                {
                
                packagesDetails.map((details, index)=>{
                    let bgColor = 'bg-secondary';
                    let textColor = 'text-white';
                    let titleColor = 'text-primary';

                    if(details.title === "Three Star") bgColor = 'bg-secondary';

                    if(details.title === "Four Star") {
                        bgColor = 'bg-primary';
                        titleColor = 'text-white';
                    }
                    if(details.title === "Five Star") {
                        bgColor = 'bg-white' ;
                        textColor = 'text-black-font';
                    };
                  

                    return( 
                    
                           <div key={index} className={`${bgColor } ${textColor} ${titleColor}`}>
                                <PackagesFeatures {...details} titleColor={titleColor}  textColor={textColor}  />
                            </div>
                        );
                       
                }
                   
                )
                
                }
            </section>

            <section className="w-full bg-secondary">
        <ReadyToPitch/>
      </section> 



            
        </>
        
    );
}