import React from "react";
import Link from "next/link";

const Button = ({to,text,classes}) => {
  return (
    <button className={`py-3 px-10 bg-purple-700 hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-lg ease-in-out ${classes}`}>
      <Link href={to}>
        <a>{text}</a>
      </Link>
    </button>
  );
};

export default Button;
