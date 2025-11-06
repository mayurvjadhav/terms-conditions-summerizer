import { useState } from "react";
import axios from "axios";

const Search = ({ setResult }) => {
  let [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitData = async () => {
    if (!input.trim()) {
      setError("Enter a website first");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/fetch-terms",
        {
          url: input,
        }
      );
      setResult(response.data);
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const siteName = [
    "Google",
    "Amazon",
    "Netflix",
    "Facebook",
    "Instagram",
    "YouTube",
    "Twitter",
    "Reddit",
    "LinkedIn",
    "Snapchat",
  ];

  return (
    <>
      <div className="flex justify-center flex-col items-center h-auto">
        <div className="flex flex-col gap-2 px-10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e293b] leading-snug text-center max-w-[18rem] sm:max-w-none mx-auto mt-10">
            TL;DR for Terms & Conditions
          </div>

          <p className="mx-auto text-[#64748b] text-center font-bold max-w-3xl mt-4">
            Enter any website and we'll break down their terms into bite-sized
            points you'll actually read.
          </p>
        </div>
        <input
          className="bg-gray-50 h-12 w-[90%] md:w-140 sm:w-120 border-2 border-gray-400 rounded-full px-5 mt-5"
          placeholder="Search website..."
          type="text"
          name="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="text-white bg-[#2563eb] hover:bg-[#1e40af]  h-12 w-[50%] max-w-40 rounded-full border-2 border-gray-400 cursor-pointer  mt-5 font-bold"
          onClick={submitData}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search T&C"}
        </button>

        {/*  error if any */}
        {error && <div className="text-red-500 font-bold">{error}</div>}

        <div className="mt-10 mx-auto w-full md:w-[50%] sm:w-[70%] overflow-hidden flex overflow-x-auto hide-scrollbar rounded-full gap-10">
          <div className="flex group pl-[100%] gap-10 ">
            {siteName.map((i, ix) => {
              return (
                <li
                  key={ix}
                  className="text-lg  text-gray-500 w-auto p-[1em] text-center content-center list-none"
                >
                  {i}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
