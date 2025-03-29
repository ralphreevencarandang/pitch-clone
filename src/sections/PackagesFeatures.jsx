




export default function PackagesFeatures({imgURL, title, description, inclusion, textColor, titleColor}) {


    return(
        

                <div className="flex justify-center items-center flex-col pb-10 padding-x">
                    <img src={imgURL} alt="Packages Images" width={300} height={300} />
                    <h3 className={`${titleColor} text-3xl font-semibold mb-5 font-display`}>{title}</h3>
                    <p className={`${textColor} lg:w-[800px] text-center mb-[16px]`}>{description}</p>
                    {inclusion.map((items, index)=>
                        <div key={index}>
                            <p  className={` text-center text-sm ${textColor} lg:w-[800px]`}> {items}</p>
                            <p className={`text-center text-sm mb-1 `}>⭐</p>
                        </div>
                    

                    )}
                

                </div>
            
      
    );
}