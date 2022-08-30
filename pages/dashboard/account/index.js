import { PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import Header from "../../../components/dashboard/Header";
import Wrapper from "../../../components/dashboard/Wrapper";
import Footer from "../../../components/layout/Footer";
// import { getSession, useSession } from "next-auth/react";
import axios from "axios";
import { BASE_URL } from "../../../utils/api";

const Account = () => {
  // const Account = ({ data }) => {
  // console.log("🚀 ~ file: index.js ~ line 13 ~ Account ~ data", data);
  // const { data: session } = useSession();
  // console.log("🚀 ~ file: index.js ~ line 12 ~ Account ~ session", session);

  return (
    <>
      <Header />
      <Wrapper className="py-6 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src={"/assets/default-profile.png"}
            // src={
            //   session?.user?.image
            //     ? session?.user?.image
            //     : "/assets/default-profile.png"
            // }
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="absolute bottom-0 right-0">
            <label className="block bg-white p-1 cursor-pointer rounded-full">
              <PhotographIcon className="w-5 text-purple-600" />
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        {/* Data */}
        <div className="my-4">
          <p className="my-3">
            <strong>Name: </strong>
            {/* {session?.user?.name} */}
          </p>
          <p className="my-3">
            <strong>Mobile Number: </strong>Pakistan
          </p>
          <p className="my-3">
            <strong>Email: </strong>Pakistan
          </p>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Account;

// export const getServerSideProps = async (context) => {
// const session = await getSession(context);
// const res = await axios.get(`${BASE_URL}/user/get_user`);

// if (!session) {
//   return {
//     redirect: {
//       destination: "/signin",
//     },
//   };
// }

// return {
//   props: { data: res.data },
// };
// };
