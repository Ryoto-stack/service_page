import React from "react";

function Expertise() {
  return (
    <main className="pb-14 sm:pb-24">
      <section className="pb-14 md:pb-24 grid grid-cols-3 mx-6">
        <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
          <div>
            <img
              src="/image-023.jpg"
              className="w-full object-cover"
              alt="bgdecor"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <h1 className="text-3xl font-medium text-white">Decor Guidance</h1>
          </div>
        </div>
        <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
          <div>
            <img
              src="/image-022.jpg"
              className="w-full object-cover"
              alt="bgdecor"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <h1 className="text-3xl font-medium text-white">
              Intentional Layout
            </h1>
          </div>
        </div>
        <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
          <div>
            <img
              src="/image-024.jpg"
              className="w-full object-cover"
              alt="bgdecor"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <h1 className="text-3xl font-medium text-white">
              Curated Elegance
            </h1>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 mx-8">
        <div className="justify-center flex flex-col items-center">
          <h1 className="text-5xl pb-5">My Staging Expertise</h1>

          <ol className="list-disc text-lg text-start">
            <li className="py-2">Unclutter and organize your home</li>
            <li className="py-2">Neatly arrange drawers and cabinet</li>
            <li className="py-2">Keep pets outdoors or off the premises</li>
            <li className="py-2">Play soft music</li>
          </ol>
        </div>
        <div>
          <img
            src="/image-025.jpg"
            alt="julie"
            className="bg-cover bg-no-repeat bg-center rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}

export default Expertise;
