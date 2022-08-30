import { useRouter } from "next/router";
import React from "react";
import Header from "../../../components/dashboard/Header";
import Footer from "../../../components/layout/Footer";
// import { getSession } from "next-auth/react";
import LeagueComponent from "../../../components/dashboard/League/LeagueComponent";


const Prize = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);

  const handleReadClick = () => {
    // alert("read working")
    console.log(query);
    router.push({
      pathname: "/dashboard/prizes/participants",
      query: query
    },"/dashboard/prizes/participants")
  }

  const handlePostClick = () => {
    alert("post working")
  }

  return (
    <>
      <Header />
      {/* Story */}
      <LeagueComponent query={query} onReadClick={handleReadClick} onPostClick={handlePostClick} />
      <Footer />
    </>
  );
};

export default Prize;

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
