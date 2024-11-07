"use client";
import React, { useEffect, useState } from "react";

interface ContentItem {
  title: string;
  maxCount: number;
}

const contents: ContentItem[] = [
  {
    title: "Initial Consultation & Planning",
    maxCount: 1,
  },
  {
    title: "Devise & Execute Marketing Plan",
    maxCount: 2,
  },
  {
    title: "Review Offers & Reach Agreement with Buyer",
    maxCount: 3,
  },
  {
    title: "Complete Transaction Process",
    maxCount: 4,
  },
  {
    title: "After - Sale Service",
    maxCount: 5,
  },
];

const CountUp: React.FC<{ maxCount: number }> = ({ maxCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < maxCount) {
      const timeout = setTimeout(() => setCount(count + 1), 100); // Adjust timing as desired
      return () => clearTimeout(timeout);
    }
  }, [count, maxCount]);

  return <div className="text-4xl font-bold text-center mb-6">{count}</div>;
};

const ContentItemComponent: React.FC<{ item: ContentItem }> = ({ item }) => (
  <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-lg h-full p-6 flex flex-col items-center">
    <CountUp maxCount={item.maxCount} />
    <h5 className="text-xl font-bold mb-4 text-center">{item.title}</h5>
  </div>
);

const SellProcess: React.FC = () => {
  return (
    <main className="pb-14 md:pb-24">
      <section
        className="py-14 md:py-24 text-zinc-900 dark:text-white relative"
        style={{
          backgroundImage: "url('/image-027.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 px-4 flex items-center justify-center flex-col max-w-[1400px] mx-auto">
          <div className="flex flex-col max-w-2xl justify-center items-center text-center">
            <h2 className="text-4xl font-bold mb-4 text-white uppercase">
              The Selling Process
            </h2>
            <p className="text-lg opacity-80 text-white">
              Our selling process is designed to deeply understand client needs,
              offer customized solutions, and seamlessly guide them through each
              stage, ensuring a smooth and successful transaction.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-6 mt-12 relative z-10">
            {contents.map((item, i) => (
              <div className="text-center flex w-full uppercase" key={i}>
                <ContentItemComponent item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SellProcess;
