import React from "react";

const Data = () => {
  const dataArr = [
    {
      success: true,
      url: "https://help.instagram.com/termsofuse",
      summery: [
        {
          point: "Your data shared widely.",
          color: "red",
        },
        {
          point: "We limit our liability.",
          color: "red",
        },
        {
          point: "Content license granted to us.",
          color: "red",
        },
        {
          point: "Subscriptions auto-renew.",
          color: "red",
        },
        {
          point: "Terms may change anytime.",
          color: "red",
        },
        {
          point: "Disputes resolved via arbitration.",
          color: "red",
        },
        {
          point: "Account deletion requires request.",
          color: "gray",
        },
        {
          point: "Governed by Delaware law.",
          color: "gray",
        },
      ],
    },
    {
      success: true,
      url: "https://www.youtube.com/static?template=terms",
      summery: [
        {
          point: "YouTube uses your content broadly.",
          color: "red",
        },
        {
          point: "YouTube monetizes your content; no pay.",
          color: "red",
        },
        {
          point: "YouTube keeps deleted content.",
          color: "red",
        },
        {
          point: "You own your content.",
          color: "green",
        },
        {
          point: "YouTube limits its liability.",
          color: "red",
        },
        {
          point: "You indemnify YouTube.",
          color: "red",
        },
        {
          point: "YouTube removes content/accounts.",
          color: "red",
        },
        {
          point: "You can delete account/data.",
          color: "green",
        },
        {
          point: "California law governs disputes.",
          color: "red",
        },
        {
          point: "YouTube can change terms.",
          color: "gray",
        },
      ],
    },
    {
      success: true,
      url: "https://openai.com/en-GB/policies/row-terms-of-use/",
      summery: [
        {
          point: "OpenAI trains models with content (opt-out)",
          color: "green",
        },
        {
          point: "You own your content",
          color: "green",
        },
        {
          point: "OpenAI limits its liability",
          color: "red",
        },
        {
          point: "No class actions or jury trials",
          color: "red",
        },
        {
          point: "Output inaccurate; user verifies",
          color: "red",
        },
        {
          point: "Employer can access your account",
          color: "red",
        },
        {
          point: "Subscriptions auto-renew, non-refundable",
          color: "gray",
        },
        {
          point: "OpenAI can terminate your account",
          color: "gray",
        },
        {
          point: "Terms may change; 30-day notice",
          color: "gray",
        },
      ],
    },
  ];
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white py-10 px-5">
      {dataArr.map((data, index) => (
        <div
          key={index}
          className="p-5 border border-gray-300 rounded-xl shadow-sm bg-white"
        >
          <h2 className="text-lg font-bold mb-4 wrap-break-word">{data.url}</h2>

          <ul className="space-y-3">
            {data.summery.map((item, idx) => (
              <li
                key={idx}
                className={`p-4 rounded-lg font-semibold text-[0.95rem] leading-tight
              ${
                item.color === "red"
                  ? "text-red-300 bg-red-800"
                  : item.color === "green"
                  ? "text-green-300 bg-green-800"
                  : "text-gray-300 bg-gray-800"
              }
            `}
              >
                {item.point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Data;
