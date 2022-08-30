const Wrapper = ({ children, className }) => {
  return <div className={`bg-white dark:bg-gray-800 w-[95vw] mx-auto px-7 my-4 rounded-lg ${className}`}>{children}</div>;
};

export default Wrapper;
