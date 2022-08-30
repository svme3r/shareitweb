import React from "react";

const Button = ({ text = "Good", onClick, type, className,disabled }) => {
  return (
    <button
      className={
        "bg-gray-700 text-white py-2 px-10 rounded-full shadow-sm hover:shadow-lg hover:tracking-widest hover:bg-gray-900 duration-300 " +
        className
      }
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
