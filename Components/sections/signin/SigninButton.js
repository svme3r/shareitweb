import React from "react";
import Image from "next/image";

const SigninButton = ({ isLoginForm, text, image, classes, onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`bg-gray-50 flex justify-center items-center w-full rounded p-1 text-sm font-semibold border border-gray-300 gap-5 hover:bg-gray-100 transition duration-300 ${classes}`}
    >
      <Image src={image} />
      {isLoginForm?"Sign in":"Sign up"} With {text}
    </button>
  );
};

export default SigninButton;
