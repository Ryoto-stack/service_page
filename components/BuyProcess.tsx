import React from "react";

function BuyProcess() {
  return (
    <main className="w-full pb-14 md:pb-24 max-w-[1400px] mx-auto">
      <h2 className="text-4xl font-bold text-black text-center mb-16">
        The Buying Process
      </h2>
      <section className="grid grid-cols-2 gap-16 items-center">
        <div>
          <img src="/image-004.jpg" alt="signing" className="rounded-xl" />
        </div>
        <div>
          <ul className="timeline flex flex-col items-start">
            <li className="flex items-center space-x-4 mb-10 relative">
              <div className="timeline-start text-4xl font-bold">1</div>
              <div className="timeline-middle flex justify-center items-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8 text-[#A6942C]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
              </div>
              <div className="timeline-end timeline-box text-2xl">
                Initial Consultation & Planning
              </div>
            </li>
          </ul>
          <ul className="timeline flex flex-col items-start">
            <li className="flex items-center space-x-4 mb-10 relative">
              <div className="timeline-start text-4xl font-bold">2</div>
              <div className="timeline-middle flex justify-center items-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8 text-[#A6942C]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
              </div>
              <div className="timeline-end timeline-box text-2xl">
                Search for a Home & Get Pre-Approved
              </div>
            </li>
          </ul>
          <ul className="timeline flex flex-col items-start">
            <li className="flex items-center space-x-4 mb-10 relative">
              <div className="timeline-start text-4xl font-bold">3</div>
              <div className="timeline-middle flex justify-center items-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8 text-[#A6942C]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
              </div>
              <div className="timeline-end timeline-box text-2xl">
                Submit an Offer
              </div>
            </li>
          </ul>
          <ul className="timeline flex flex-col items-start">
            <li className="flex items-center space-x-4 mb-10 relative">
              <div className="timeline-start text-4xl font-bold">4</div>
              <div className="timeline-middle flex justify-center items-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8 text-[#A6942C]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div> */}
              </div>
              <div className="timeline-end timeline-box text-2xl">
                Complete Settlement Process
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default BuyProcess;
