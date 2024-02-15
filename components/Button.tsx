import React from "react";

function Button({
  type = "submit",
  text,
}: {
  type?: "submit" | "button";
  text: string;
}) {
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
}

export default Button;
