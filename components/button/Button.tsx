import React from "react";

function Button({ className, text }: any) {
  return (
    <button
      className={`px-6 py-2 bg-black text-white uppercase  hover:bg-black/70 ${className}`}
    >
      {text || "Shop Now"}
    </button>
  );
}

export default Button;
