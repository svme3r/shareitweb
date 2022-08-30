import React, { useState } from "react";
import Header from "../../../components/dashboard/Header";
import WinnerCard from "../../../components/dashboard/Prizes/WinnerCard";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import Wrapper from "../../../components/dashboard/Wrapper";
import Footer from "../../../components/layout/Footer";
import { storiesApi } from "../../../data/data";
import { useRouter } from "next/router";
// import { getSession } from "next-auth/react";


const Prizes = () => {
  const router = useRouter();
  console.log(storiesApi);

  return (
    <>
      <Header />
      <Wrapper className="py-5 pb-12">
        <StoryHeader />
        {/* Winners List */}
        <div className="flex justify-center gap-10 flex-wrap">
          {storiesApi.map((item, index) => {
            return (
              <WinnerCard
                key={index}
                title={item.Title}
                onClick={() =>
                  router.push(
                    {
                      pathname: `/dashboard/prizes/${item._id}`,
                      query: item,
                    },
                    `/dashboard/prizes/${item._id}`
                  )
                }
              />
            );
          })}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Prizes;

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
