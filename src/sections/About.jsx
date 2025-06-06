import { aboutImages } from "../assets/images";

function About() {
  return (
    <div className="w-full min-h-screen bg-[#f8f6f2] overflow-x-hidden">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-display font-bold text-gray-800 mb-6">About</h1>

        <h2 className="text-2xl font-display font-semibold text-gray-700 mb-6">
          Pitch provides memorable outdoor glamping experiences
        </h2>

        <div className="space-y-5 text-gray-700 text-lg">
          <p>
            At Pitch, our passion for glamping was borne out of our love of
            camping, music festivals, and exploring the British countryside. We
            want everyone to enjoy the outdoors as much as we do, which is why
            we provide camping that appeals to all – glamping that is
            comfortable, spacious, luxurious, and effortless.
          </p>

          <p>
            We work at a huge range of different events from weddings,
            festivals, corporate retreats, and private parties, accommodating up
            to 400 guests. Whatever you're planning, we know it can be a{" "}
            <em>lot</em> of work, but working with Pitch couldn't be easier. Our
            friendly team will partner closely with you throughout and are on
            hand to do all of the hard work, so you don't have to!
          </p>

          <p>
            We know every event is different and we've got a great range of{" "}
            <a href="#" className="text-orange-500 hover:underline">
              tents
            </a>{" "}
            and{" "}
            <a href="#" className="text-orange-500 hover:underline">
              packages
            </a>{" "}
            to suit all sorts of experiences. But we're always happy to provide
            bespoke options to make your occasion extra special. Just check out
            our{" "}
            <a href="#" className="text-orange-500 hover:underline">
              stories
            </a>{" "}
            to read about how our clients have found working with us.
          </p>

          <p>
            From our base in sunny South Wales, we're well placed to operate
            right across the UK. So get in touch and let's start planning your
            Pitch!
          </p>
        </div>
      </div>

      {/* Camping in Comfort Section */}
      <>
        <section className="bg-[#282433] text-white py-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#f4983c] text-3xl font-display font-semibold mb-4">Camping in Comfort</h2>
          </div>
        </section>
        <section className="bg-[#f4983c] py-8">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
            {aboutImages.map((image) => (
              <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 p-2 flex justify-center">
                <figure>
                  <a href={`#${image.id}`}>
                    <img src={image.src} alt={image.id} className="w-full h-auto object-cover" />
                  </a>
                </figure>
              </div>
            ))}
          </div>
        </section>
        {aboutImages.map((image) => (
          <div key={image.id} id={image.id} className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center hidden">
            <figure>
              <img src={image.src} alt={image.id} className="max-w-full max-h-full" />
            </figure>
          </div>
        ))}
      </>
    </div>
  );
}

export default About;
