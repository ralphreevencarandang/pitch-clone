import { useState } from "react";
import img1 from "../assets/stories/banner.jpg";
import img2 from "../assets/stories/campfire.png";
import img3 from "../assets/stories/kettle.png";
import img4 from "../assets/stories/log.png";

function Stories() {
  const [count, setCount] = useState(0);

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
        {/* South Wales Wedding */}
        <div className="text-center">
          <img src={img2} alt="Campfire Illustration" className="mx-auto w-20" />
          <div className="text-orange-400 my-6 text-2xl font-display font-bold">South Wales Wedding</div>
          <p className="text-gray-600 my-4">My fiancé and I hired Pitch for our guest accommodation at our glamping wedding in April 2019. Chris and his team were just fabulous. Despite the unfortunate bad weather, they were super positive...</p>
          <div className="flex justify-center items-center ">
            <button className="text-white bg-primary py-2 px-3 border-6 border-double border-amber-50 rounded-2xl font-semibold cursor-pointer hover:bg-orange-500 min-w-[170px] font-display">Read Story</button>
        </div>
        </div>

        {/* Devon Wedding */}
        <div className="text-center">
          <img src={img3} alt="Campfire Illustration" className="mx-auto w-20" />
          <div className="text-orange-400 my-6 text-2xl font-display font-bold">Devon Wedding</div>
          <p className="text-gray-600 my-4">We used Pitch for our wedding in September and they were absolutely amazing! The tents were beautiful and the guests absolutely loved them. A lot of other guests that stayed in accommodation off site...</p>
          <div className="flex justify-center items-center ">
            <button className="text-white bg-primary py-2 px-3 border-6 border-double border-amber-50 rounded-2xl font-semibold cursor-pointer hover:bg-orange-500 min-w-[170px] font-display">Read Story</button>
        </div>
        </div>

        {/* Mistress Mary Festival 2021 */}
        <div className="text-center py-6">
          <img src={img4} alt="Campfire Illustration" className="mx-auto w-20" />
          <div className="text-orange-400 my-4 text-2xl font-display font-bold">Mistress Mary Festival 2021</div>
          <p className="text-gray-600 my-4">Pitch provided a service for us at our small private festival (affiliated to Secret Garden Party) in 2021.  Although the event was arranged at short notice (due to Covid) they were so organised and capable...</p>
          <div className="flex justify-center items-center ">
            <button className="text-white bg-primary py-2 px-3 border-6 border-double border-amber-50 rounded-2xl font-semibold cursor-pointer hover:bg-orange-500 min-w-[170px] font-display">Read Story</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;