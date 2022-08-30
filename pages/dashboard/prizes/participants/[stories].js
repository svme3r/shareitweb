import { useRouter } from "next/router";
import Storye from "../../../../components/dashboard/Prizes/Storye.js"
// import { getSession } from "next-auth/react";


const Stories = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return (
    <Storye query={query} />
  );
};

export default Stories;

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

