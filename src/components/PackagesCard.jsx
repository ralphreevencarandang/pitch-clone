

export default function PackagesCard({imgURL, star}){

    return(
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="Packages Images" width={300} height={300}/>
            <h3 className="text-black-font text-2xl font-semibold font-display">{star}</h3>
        </div>
    );

}