import React from "react";
import axios from "axios";

export default function Select() {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState(null);

  const onClick = async () => {
    const res = await axios.get(
      `https://eu-central-1.aws.data.mongodb-api.com/app/test-jhtxn/endpoint/webhook?address=${input}`
    );
    console.log(res.data);
    setResult(res.data);
  };
  return (
    <div className="w-screen h-screen flex justify-center flex-col">
      {result !== null ? (
        <>
          {result == true ? (
            <span className="text-center font-bold text-3xl mb-5">
              Blacklisted address!
            </span>
          ) : (
            <span className="text-center font-bold text-3xl mb-5">
              Innocent address!
            </span>
          )}
        </>
      ) : null}
      <input
        placeholder="Address"
        onChange={(e) => setInput(e.target.value)}
        className="shadow-xl w-96 rounded-xl mx-auto border-gray-400 border-2 p-4"
        style={{ width: "600px" }}
      />
      <div
        className="bg-purple-500 rounded-xl text-center flex w-52 p-4 mx-auto mt-5 cursor-pointer"
        onClick={onClick}
      >
        <span className="mx-auto font-bold text-white text-2xl">Check</span>
      </div>
    </div>
  );
}
