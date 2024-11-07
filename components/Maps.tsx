import React from "react";
import PropTypes from "prop-types";

type Feature = {
  img: string;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    img: "image-007.jpg",
    title: "Responsive",
    desc: "I am always available via phone, text, or email to answer your questions in a timely manner.",
  },
  {
    img: "image-083.jpg",
    title: "Syndication",
    desc: "I market your property locally, nationally, and internationally.",
  },
  {
    img: "image-009.jpg",
    title: "Virtual Tour",
    desc: "Let’s make your home stand out with a high quality virtual tour.",
  },
  {
    img: "image-081.jpg",
    title: "Drone Photography",
    desc: "Beautiful photography is a central part of our marketing plan for your property.",
  },
];

type FeatureItemProps = {
  feature: Feature;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <div className="flex  shadow-xl relative p-3 md:p-6 mb-4 lg:mb-6">
      <div className="rounded-full w-20 20 mb-6 mr-3 xl:mr-8 overflow-hidden">
        <img
          src={feature.img}
          alt={feature.title}
          className="w-full h-full object-cover items-center flex justify-center"
        />
      </div>
      <div>
        <h4 className="text-2xl font-medium mb-4 uppercase">{feature.title}</h4>
        <p>{feature.desc}</p>
      </div>
    </div>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

const Maps: React.FC = () => {
  return (
    <section className="pb-14 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className="relative h-full z-10">
              <div
                className="bg-center bg-no-repeat bg-contain rounded-3xl min-h-[350px] w-full float-right h-full"
                style={{
                  backgroundImage: "url(/edited-p25.jpg)",
                }}
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="lg:ml-6 xl:ml-12">
              {features.map((feature, i) => (
                <FeatureItem feature={feature} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
