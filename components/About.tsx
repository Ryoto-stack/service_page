import React from "react";

const stories = [
  {
    text: "Beautiful and easy to understand UI.",
  },
  {
    text: "Theme advantages are pixel perfect design & clear code",
  },
  {
    text: "Present your services with flexible",
  },
  {
    text: "Find more creative ideas for your projects",
  },
  {
    text: "Faucibus porta lacus fringilla vel",
  },
];

function About() {
  return (
    <main className="pb-14 md:pb-24 px-40">
      <section className="grid grid-cols-2 gap-5">
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-7xl font-bold ">
            Over <span className="underline">33 Years</span> of Real Estate
            Success
          </h1>
          <p className="text-lg pt-5">
            We provide every one of our clients with a level of service they
            won’t find anywhere else. We give them what they need, often before
            they know they need it. ​​​​​​​In real estate, almost everything can
            be negotiated. When you choose Hansen Partners, experience is 100%
            nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.
          </p>
        </div>
        <div>
          <img src="/edited-p-12.jpg" alt="market" />
        </div>
      </section>
      <section className="grid grid-cols-2 gap-5 ">
        <div>
          <img src="/edit-page-11r2.jpg" alt="years" />
        </div>
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-6xl font-bold ">
            We Want To Create An Unforgettable Experience For You...
          </h1>
          <p className="text-lg pt-5">
            We combine data gained from your home’s Comparative Market Analysis
            with local market research to create a marketing plan designed to
            help you meet your selling goals. Your home’s carefully designed
            plan will include a range of online, print, and other marketing
            tools targeted to the best-qualified pool of buyers. ​​​​​​​
            Successfully marketing a home in today’s real estate environment
            requires a firm with experience and flexibility. Hansen Partners
            provides both.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-5 w-full">
        <div className="p-7 flex items-center flex-col justify-center">
          <h1 className="text-5xl font-bold ">
            The Hansen Partners Communications Tablet
          </h1>
          <p className="pt-5">
            We have created this as a wonderful tool so that we can communicate
            with you daily, provide you with updates on what is happening with
            your home. We are available at the with a click of your tablet.
          </p>
          <div className="space-y-4">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 w-full rounded-lg bg-gray-200 p-4 text-gray-900">
                <h2 className="font-medium">Benefits</h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <ol className="list-disc">
                <li>
                  Review all documents and sign in the comfort of your home or
                  anywhere.
                </li>
                <li>
                  Stay up to date on all marketing activities, review materials,
                  photos, etc. in real time.
                </li>
                <li>
                  Meet with us face to face on our Gotomeeting.com platform to
                  go over and discuss the events of the week.
                </li>
                <li>
                  You have your own email assigned just for you and your common
                  space to quickly write a note, or quickly send a video message
                  to us for fast communication using our Bomb bomb video
                  messaging system.
                </li>
              </ol>
            </details>
          </div>
        </div>
        <div>
          <img src="/edit-image-056.jpg" alt="tablet" />
          <p className="mt-10">
            We believe that transparency and guiding you and your family through
            the process is key to having the best experience. During these
            uncertain times. It is a good feeling to know you have some one with
            a proven track record you can count on. We will be here to handle
            your needs during the Real Estate process. We think of it before a
            need even arises. Because, that is just what we do. Who you work
            with does matter!{" "}
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
