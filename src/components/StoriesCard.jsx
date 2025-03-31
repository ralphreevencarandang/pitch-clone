
import Button from "./Button";

export default function StoriesCard({imgURL, title, details}) {
    return(
        <div>
             <div className="text-center">
                      <img src={imgURL} alt="Campfire Illustration" className="mx-auto w-20" />
                      <div className="text-orange-400 my-6 text-2xl font-display font-bold">{title}</div>
                      <p className="text-gray-600 my-4">{details}</p>
                      <div className="flex justify-center items-center ">
                        <Button label="Read Story"/>
                    </div>
            </div>
        </div>
    );
}