import Header from "../../../components/dashboard/Header";
import Footer from "../../../components/layout/Footer";
import LeagueComponent from "../../../components/dashboard/League/LeagueComponent.js";
// import { getSession } from "next-auth/react";
import Head from "next/head";
import { BASE_URL } from "../../../utils/api";

const League = ({ league }) => {

  return (
    <>
      <Head>
        <title>{league.Title} | Share It</title>
      </Head>
      <Header />
      {/* Story */}
      <LeagueComponent query={league} />
      <Footer />
    </>
  );
};

export default League;

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`${BASE_URL}/leagues/getleaguebyparam/${id}`);
  const league = await res.json();

  // const session = await getSession(context);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //     },
  //   };
  // }

  return {
    props: {  league },
  };
};
