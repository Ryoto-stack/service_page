import React from "react";

function Plan() {
  return (
    <section className="py-14 md:py-24">
      <h1 className="w-full justify-center flex text-5xl">
        Comprehensive Marketing Plan
      </h1>
      <div className="grid grid-cols-4 gap-4  p-5 text-center ">
        <div className="items-center flex flex-col">
          <img src="/image-087.jpg" alt="envelope" className="h-[200px]" />
          <h1 className="text-3xl mb-5">Responsive</h1>
          <p>I am always available via phone, text, or email.</p>
        </div>
        <div className="items-center flex flex-col">
          <img src="/image-083.jpg" alt="envelope" className="h-[200px]" />
          <h1 className="text-3xl mb-5">Syndication</h1>
          <p>I market your property locally, nationally, and internationally</p>
        </div>
        <div className="items-center flex flex-col">
          <img src="/image-085.jpg" alt="envelope" className="h-[200px]" />
          <h1 className="text-3xl mb-5">Virtual Tour</h1>
          <p>
            Let's make your home stand out with a high quality virtual tour.
          </p>
        </div>
        <div className="items-center flex flex-col">
          <img src="/image-013.jpg" alt="envelope" className="h-[200px]" />
          <h1 className="text-3xl mb-5">Photography</h1>
          <p>
            Beatiful, high-end photography is a central part of our marketing
            plan for your property.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Plan;
