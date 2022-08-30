import { useRouter } from "next/router";
import Storye from "../../../../components/dashboard/Prizes/Storye.js";
// import { getSession } from "next-auth/react";
import { BASE_URL } from "../../../../utils/api.js";

const Stories = ({ story }) => {
console.log("🚀 ~ file: [stories].js ~ line 7 ~ Stories ~ story", story)

  return <Storye query={story} />;
};

export default Stories;

export const getServerSideProps = async (context) => {
  const { stories } = context.query;
  const res = await fetch(`${BASE_URL}/Stories/getstorybyparam/${stories}`);
  const story = await res.json();

  // const session = await getSession(context);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //     },
  //   };
  // }

  return {
    props: {  story },
  };
};
