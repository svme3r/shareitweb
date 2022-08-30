import Image from "next/image";

const Card = ({ rounded = true, image }) => {
  return (
    <div
      className={`w-full h-[40vh] overflow-hidden cursor-pointer ${
        rounded && "rounded-3xl"
      }`}
    >
      {/* <Image src={image?image:"/assets/logo.png"} objectFit="cover" className={`${rounded && "rounded-3xl"} hover:scale-110 hover:rounded-3xl transition duration-500 `} layout="fill" /> */}
      {image ? (
        <Image
          src={image}
          objectFit="cover"
          className={`${
            rounded && "rounded-3xl"
          } hover:scale-110 hover:rounded-3xl transition duration-500 `}
          layout="fill"
        />
      ) : (
        <div className="w-full h-full animate-pulse bg-slate-500 rounded-2xl"></div>
      )}
    </div>
  );
};

export default Card;
