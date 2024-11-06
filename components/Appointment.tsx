import React from "react";

const Appointment = () => {
  return (
    <button
      type="submit"
      className="relative z-10 flex items-center justify-center gap-2 px-4  mx-auto text-lg bg-gray-50 shadow-xl backdrop-blur-md border-2 border-gray-50 rounded-full overflow-hidden group transition-all duration-700 ease-linear lg:font-semibold isolation-auto"
    >
      <span className="relative z-10 group-hover:text-gray-50">Explore</span>
      <svg
        className="w-8 h-8 p-2 border border-gray-700 rounded-full text-gray-50 transition-transform duration-300 ease-linear rotate-45 group-hover:rotate-90 group-hover:bg-gray-50 group-hover:border-none"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-gray-800 group-hover:fill-gray-800"
        />
      </svg>
      <span className="absolute inset-0 w-full h-full bg-emerald-500 -z-10 -left-full rounded-full transition-all duration-700 group-hover:left-0 group-hover:scale-150" />
    </button>
  );
};

export default Appointment;
