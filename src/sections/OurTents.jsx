import TentFeaturesCard from "../components/TentFeaturesCard";
import { features } from "../constant";
import ReadyToPitch from "./ReadyToPitch";
import PhotoGallery from "./PhotoGallery";

export default function OurTents() {
  return (
    <>

      <section className="flex justify-center flex-col items-center">
        <div className="max-container  padding-x">
          <div className="py-10 max-w-[830px]  ">
            <h1 className="text-black-font text-4xl font-semibold text-center mb-10 font-display">
              Our Tents
            </h1>
            <p className="text-center break-words text-xl leading-normal tracking-wide">
              We offer a range of 4m and 5m bell tents, with our largest tents
              accommodating up to 4 adults. Each of our spacious tents are packed
              with great features as standard - and our{" "}
              <span className="text-primary">packages</span> include lots of
              luxurious extras. Check out our gallery below to see for yourself!
            </p>
          </div>

          <div className="pb-20">
            <h1 className="text-4xl font-semibold text-primary text-center font-display">
              Tent Features
            </h1>
            <div className="grid md:grid-cols-3 gap-5 max-sm:grid-cols-1 place-items-center ">
              {features.map((feature, index) => (
                <TentFeaturesCard key={index} {...feature} />
              ))}
            </div>
          </div>

        </div>


      </section>
      

      <section className=" bg-secondary  place-items-center w-full  ">

        <div className="max-container padding">
          <PhotoGallery/>

        </div>

      </section>

      

    </>
  );
}
