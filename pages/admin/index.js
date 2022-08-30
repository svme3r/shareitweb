import axios from "axios";
import Head from "next/head";
import { useState as UseState } from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import { BASE_URL } from "../../utils/api";
// import { getSession} from "next-auth/react";

const admin = ({ leagues, stories }) => {
  const [open, setOpen] = UseState(false);

  return (
    <>
    <Head>
      <title>Admin | ShareIt</title>
    </Head>
      <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1">
          <Header heading="Home" className={open ? "ml-16" : "ml-60"} />
          <div className={`${open ? "ml-16" : "ml-60"}`}>
            {/* <div
            className={`mx-auto p-5 duration-300 ${open ? "ml-16" : "ml-60"}`}
          > */}
            {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3"> */}
            <div>
              {/* <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total Leagues
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  {leagues?.length}
                </div>
              </div>
              <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total Stories
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  {stories?.length}
                </div>
              </div> */}
              {/* <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total Orders
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  20k
                </div>
              </div> */}
            </div>
            <div>
              <iframe
                src="https://admin-dashboard-three-peach.vercel.app/"
                className="w-full h-screen overflow-y-hidden"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  const leaguesRes = await axios.get(`${BASE_URL}/leagues/home`);
  const storiesRes = await axios.get(`${BASE_URL}/Stories/homestories`);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //     },
  //   };
  // }

  return {
    props: {
      leagues: leaguesRes.data,
      stories: storiesRes.data,
    },
  };
}

export default admin;
