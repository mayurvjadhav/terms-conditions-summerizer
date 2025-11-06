import { AlertCircle, CheckCircle, FileText, Search } from "lucide-react";
import { useEffect, useState } from "react";

const Card = ({ result }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (result) {
      setData(result);
    }
  }, [result]);

  return (
    <div>
      {data && (
        <div className="px-5 flex justify-center flex-col w-1/1 sm:w-[35em] mx-auto mb-10 h-auto mt-5 pt-5">
          {data?.summery.map((item, index) => (
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
      )}
      {!data && (
        <div className="w-full min-h-80 max-h-max items-center flex flex-col text-black text-2xl font-bold py-40 ">
          <div className="text-gray-400">
            Don't miss on term's and conditions ever again!
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
