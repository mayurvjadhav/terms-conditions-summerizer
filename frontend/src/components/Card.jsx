import { AlertCircle, CheckCircle, FileText, Search } from "lucide-react";

const Card = ({ result, handleDelete, loading }) => {
  if (loading) {
    return (
      <div className="px-10 flex justify-center flex-col w-full sm:w-[35em] mx-auto mb-10 h-auto mt-5 pt-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex p-4 rounded-lg shadow-md mb-2 px-10 font-bold text-gray-300 bg-gray-300 animate-pulse"
          >
            <li>.</li>
          </div>
        ))}
      </div>
    );
  } else if (result) {
    return (
      <div className="px-5 flex justify-center flex-col w-1/1 sm:w-[35em] mx-auto mb-10 h-auto mt-5 pt-5">
        <div className="flex justify-end ">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 font-bold"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
        {result?.summery.map((item, index) => (
          <div
            key={index}
            className={`flex p-4 rounded-lg shadow-md mb-2 px-10 font-bold ${
              item.color === "red"
                ? "text-red-300 bg-red-800"
                : item.color === "green"
                ? "text-green-300 bg-green-800"
                : item.color === "gray"
                ? "text-gray-300 bg-gray-800"
                : "text-yellow-300 bg-yellow-800"
            }`}
          >
            <li>{item.point}</li>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      !result && (
        <div className="w-full min-h-80 max-h-max items-center flex flex-col text-black text-2xl font-bold py-40 px-10 ">
          <div className="text-gray-400 px-10">
            Don't miss on term's and conditions ever again!
          </div>
        </div>
      )
    );
  }
};

export default Card;
