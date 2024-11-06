import React from "react";

const SearchForm = () => {
  return (
    <form className="relative flex items-center w-[200px] h-[40px] px-3 rounded-full bg-white transition-all duration-200 ease-in-out focus-within:rounded-[1px]">
      <button className="text-[#8b8ba7]">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        type="text"
        className="peer w-full h-full bg-transparent px-2 py-1.5 text-sm focus:outline-none"
        placeholder="Type your text"
        required
      />
      <button
        type="reset"
        className="opacity-0 invisible transition-opacity peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2f2ee9] transform scale-x-0 transform-origin-center transition-transform duration-300 ease-in-out peer-focus:scale-x-100"></span>
    </form>
  );
};

export default SearchForm;
