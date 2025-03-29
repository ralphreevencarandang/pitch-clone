import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Booking() {
  return (
    <section className="flex justify-center items-center flex-col ">
      <div className="max-container  text-center padding-x padding-y ">
        <h1 className="text-5xl my-8 text-black-font font-semibold font-display">Booking</h1>
        <p className="lg:w-[830px] text-lg text-black-font">
          To find out more about how Pitch can help you with your next event,
          please fill out our form below and one of our team will get back to
          you
        </p>
      </div>

      <div className="w-full ">
        <Step1 />
      </div>

      <div className="max-container padding-x padding-y">
        <Step2 />
      </div>

      <div className="w-full bg-amber-950 flex justify-center items-center">
        <Step3 />
      </div>

    </section>
  );
}
