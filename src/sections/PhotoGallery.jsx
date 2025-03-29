import GalleryCard from "../components/GalleryCard";
import { gallery } from "../constant";
import ReadyToPitch from "./ReadyToPitch";

export default function PhotoGallery(){
    return(
     
         <div className="max-container">
            <h1 className="text-white text-4xl text-center py-10 font-bold font-display">Photo Gallery</h1>

                <div className="grid md:grid-cols-3 max-md:grid-cols-2  place-items-start max-sm:grid-cols-1 gap-5 max-sm:place-items-center ">
                    {gallery.map((gallery, index) => 
                        <GalleryCard key={index} {...gallery}  />
                    )}
                </div>

                
            </div>
       
    
       
        
    );
}