import React from "react";

function Strategy() {
  return (
    <main className="h-full w-full px-7 pb-14 md:pb-24">
      <section className="flex flex-col items-center justify-center">
        <div className="items-center flex-col flex justify-center">
          <h1 className="text-3xl">We Market Your Home to The World</h1>
          <h1 className="py-5 font-bold text-lg">
            Our Online Marketing Strategy
          </h1>

          <p className="px-40 text-center">
            ​​​​​​​The Bay Area remains one of the world`&apos;`s most
            sought-after regions to live in, and when looking to sell, it is
            vital that your home be marketed online to audiences locally,
            nationally, and internationally.
          </p>
        </div>
        <img src="/image-057.jpg" alt="realtor" className="h-5 w-72  my-5" />
        <div className="grid grid-cols-3 text-center">
          <div className="flex flex-col p-5">
            <img src="/pexels-pixabay-280221.jpg" alt="community" />
            <h1 className="text-center pb-5 font-bold text-xl mt-5">
              Local Exposure
            </h1>
            <p>
              Through our partnership with Nextdoor, the private online social
              network now used in over 80% of U.S. neighborhoods and virtually
              all Bay Area neighborhoods, we make sure your home receives
              targeted local exposure. When you list your home with Hansen
              Partners it will automatically appear on Nextdoor in your
              neighborhood.
            </p>
          </div>
          <div className="flex flex-col p-5">
            <img
              src="/pexels-matt-barnard-21952098-6797297.jpg"
              alt="community"
            />
            <h1 className="text-center pb-5 font-bold text-xl mt-5">
              National Exposure
            </h1>
            <p>
              We secure strategic positioning and enhancement on Realtor.com,
              Trulia, and Zillow, driving more consumers to your home and
              increasing exposure. We will receive every inquiry about your
              property directly.
            </p>
          </div>
          <div className="flex flex-col p-5">
            <img src="/pexels-pavel-danilyuk-7937225.jpg" alt="community" />
            <h1 className="text-center pb-5 font-bold text-xl mt-5">
              International Exposure
            </h1>
            <p>
              To expose your luxury listing to millions of potential homebuyers
              worldwide, we promote on prominent international real estate
              portals, including: Wall Street Journal, LuxuryPortfolio.com,
              LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com,
              China.apr.com, Caimeiju, Juwai, Country Life UK
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
}

export default Strategy;
