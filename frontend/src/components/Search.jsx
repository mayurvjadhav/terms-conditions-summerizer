import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState("");

  const submitData = async () => {
    try {
      const response = axios.post("http://localhost:4000/api/fetch-terms", {
        url: input,
      });
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center bg-olive h-auto">
        <div className="flex flex-col gap-2 px-10">
          <div className=" mx-auto mt-10 text-4xl sm:text-5xl text-white ">
            TL;DR for Terms & Conditions
          </div>

          <p className="mx-auto text-cyan-300">
            Enter any website and we'll break down their terms into bite-sized
            points you'll actually read.
          </p>
        </div>
        <input
          className="bg-gray-50 h-12 w-[90%] md:w-140 sm:w-120 border-2 border-gray-400 rounded-full px-5 mt-18"
          placeholder="Search website..."
          type="text"
          name="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          className="bg-violet-600 h-12 w-[50%] max-w-40 rounded-full text-white border-2 border-gray-400 cursor-pointer hover:bg-violet-800 mt-5 mb-30"
          onClick={submitData}
        >
          Search T&C
        </button>
        <div className="bg-red-950 w-full h-15 flex flex-row gap-25 items-center list-none overflow-hidden">
          <li className="bg-red-400 font-bold border-2 border-gray-400 rounded-full w-auto px-5 h-[70%] flex justify-center items-center">
            Google
          </li>
          <li className="bg-red-400 font-bold border-2 border-gray-400 rounded-full w-auto px-5 h-[70%] flex justify-center items-center">
            Amazon
          </li>
          <li className="bg-red-400 font-bold border-2 border-gray-400 rounded-full w-auto px-5 h-[70%] flex justify-center items-center">
            Netflix
          </li>
        </div>
      </div>
    </>
  );
};

export default Search;
