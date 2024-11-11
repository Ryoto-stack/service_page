import React from "react";

function Plan() {
  return (
    <section className="py-14 md:py-24 max-w-[1400px] mx-auto">
      <h1 className="w-full justify-center flex text-2xl text-center px-5 md:text-4xl font-bold uppercase">
        Comprehensive Marketing Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4  p-5 text-center ">
        <div className="items-center flex flex-col">
          <img src="/image-087.jpg" alt="envelope" className="h-[200px]" />
          <h1 className="text-2xl mb-5 font-bold uppercase">Responsive</h1>
          <p className="text-balance">
            I am always available via phone, text, or email.
          </p>
        </div>
        <div className="items-center flex flex-col">
          <img src="/image-083.jpg" alt="envelope" className="h-[200px]" />
          <h1 className="text-2xl mb-5 font-bold uppercase">Syndication</h1>
          <p className="text-balance">
            I market your property locally, nationally, and internationally
          </p>
        </div>
        <div className="items-center flex flex-col">
          <img src="/image-085.jpg" alt="envelope" className="h-[200px]" />
          <h1 className="text-2xl mb-5 font-bold uppercase">Virtual Tour</h1>
          <p className="text-balance">
            Let&apos;s make your home stand out with a high quality virtual
            tour.
          </p>
        </div>
        <div className="items-center flex flex-col">
          <img src="/image-013.jpg" alt="envelope" className="h-[200px]" />
          <h1 className="text-2xl mb-5 font-bold uppercase">Photography</h1>
          <p className="text-balance">
            Beatiful, high-end photography is a central part of our marketing
            plan for your property.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Plan;
