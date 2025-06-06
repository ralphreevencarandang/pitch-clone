import img1 from "../assets/stories/banner.jpg";

import {storiesEvents} from "../constant/index";
import StoriesCard from "../components/StoriesCard";


function Stories() {
  return (
    <div className="w-screen min-h-screen bg-[#f8f6f2]">
      

    {/* Stories Section */}
    <div className="text-center py-10">
        <h2 className="text-4xl font-display font-semibold text-gray-800">Stories</h2>
        <div className="flex justify-center my-6">
          <img src={img1} alt="Campfire Illustration" className="w-210" />
        </div>
      </div>

      {/* Story Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-12">
        {
          storiesEvents.map((story, index)=>
              <div key={index}>
                  <StoriesCard {...story} />
              </div>
          )
        }
        
      </div>
    </div>
  );
}

export default Stories;