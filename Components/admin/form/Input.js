import React from "react";

const Input = ({type,placeholder,value,onChange,className,name,id}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      className={("form-control block px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ")+className}
      placeholder={placeholder}
    />
  );
};

export default Input;
