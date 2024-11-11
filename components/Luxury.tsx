import React from "react";

function AboutUs() {
  return (
    <main className="pb-14 md:pb-24 ">
      <section className="flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="lg:px-7">
            <h1 className="uppercase text-4xl md:text-6xl leading-tight flex justify-center w-full font-medium mb-10">
              ABOUT US
            </h1>
            <div className="flex justify-center flex-col md:flex-row gap-10 pb-10 px-5 md:px-0">
              <img src="/image-060.jpg" alt="Logo 1" className="h-20" />
              <img src="/image-069.jpg" alt="Logo 2" className="h-20" />
              <img src="/image-070.jpg" alt="Logo 3" className="h-20" />
            </div>
            <hr className="w-24 h-1 bg-black dark:bg-white opacity-100 my-6" />
            <div className="mx-auto max-w-lg">
              <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 shadow-sm">
                <li className="p-4">
                  <h4 className="text-lg font-medium leading-loose">
                    Leading Real Estate Companies of The World® & Luxury
                    Portfolio International{" "}
                  </h4>
                  <p className="text-gray-500">
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                  </p>
                </li>
                <li className="p-4">
                  <h4 className="text-lg font-medium leading-loose">
                    Luxury Portfolio{" "}
                  </h4>
                  <p className="text-gray-500">
                    JRockcliff is a founding member of Luxury Portfolio
                    International®, the luxury division of Leading Real Estate
                    Companies of the World®. With more than 500 member firms
                    around the world, Our luxury listings are exposed to a vast
                    global audience and reach potential buyers and investors in
                    over 50 countries.
                  </p>
                </li>
                <li className="p-4">
                  <h4 className="text-lg font-medium leading-loose">
                    Who`&apos;`s Who in Luxury Real Estate
                  </h4>
                  <p className="text-gray-500">
                    Who`&apos;`s Who in Luxury Real Estate is a global
                    collection of luxury real estate brokers.
                  </p>
                </li>
              </ul>
              <h1 className="my-5 px-5">
                Through our international affiliations, we have a strong
                presence in over 50 countries. Our luxury listings are sent to
                prominent international real estate sites, reaching over 70
                million potential buyers and investors worldwide through our
                relationships with:
              </h1>
              <h1 className="px-5">
                We also have several well-positioned affiliate offices in China,
                providing our clients with access to buyers in Hong Kong,
                Shanghai, and Beijing.{" "}
              </h1>
            </div>
          </div>

          <div className="relative flex justify-center items-center lg:flex-col lg:pl-20">
            <div className="diamond-shape w-60 h-60 lg:w-96 lg:h-96 mt-16">
              <img
                src="edited-p-19.jpg"
                alt="Decorative 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="diamond-shape hidden md:block w-60 h-60 lg:w-96 lg:h-96 mt-16 lg:-mt-16">
              <img
                src="edited-page-20.jpg"
                alt="Decorative 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
