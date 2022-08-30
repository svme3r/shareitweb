import React from "react";
import Header from "../../../components/dashboard/Header";
import Wrapper from "../../../components/dashboard/Wrapper";
import Footer from "../../../components/layout/Footer";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import Image from "next/image";
// import { getSession } from "next-auth/react";


const Winners = () => {
  return (
    <>
      <Header />
      <Wrapper className="pb-9">
        <StoryHeader />
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="w-1/2 m-auto">
              <Image
                src="/assets/winners.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          {/* Details */}
          <div className="py-3 flex-1 flex flex-col justify-center text-lg ">
            <p className="text-gray-600 font-semibold py-2">
              <strong className="text-black">Story: </strong>Journey Moon
            </p>
            <p className="text-gray-600 font-semibold py-2">
              <strong className="text-black">Start Date: </strong>Journey Moon
            </p>
            <p className="text-gray-600 font-semibold py-2">
              <strong className="text-black">Entry Fee: </strong>Journey Moon
            </p>
            <p className="text-gray-600 font-semibold py-2">
              <strong className="text-black">1st Price: </strong>Journey Moon
            </p>
            <p className="text-gray-600 font-semibold py-2">
              <strong className="text-black">2nd Price: </strong>Journey Moon
            </p>
            <p className="text-gray-600 font-semibold py-2">
              <strong className="text-black">3rd Price: </strong>Journey Moon
            </p>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Winners;

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/signin",
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };
