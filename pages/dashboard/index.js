import CardSlider from "../../components/dashboard/CardSlider";
import Carousel from "../../components/dashboard/Carousel";
import Header from "../../components/dashboard/Header";
import Button from "../../components/layout/Button";
import Link from "next/link";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/outline";
import Footer from "../../components/layout/Footer";
// import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import StoryTable from "../../components/StoryTable/StoryTable";
import axios from "axios";
import { BASE_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const dashboard = ({ leagues, stories }) => {
  const router = useRouter();
  // const { data: session } = useSession();
  // console.log("🚀 ~ file: index.js ~ line 21 ~ dashboard ~ session", session);

  // const [temp, setTemp] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/user/GetUserByEmail/${localStorage.getItem("userEmail")}`
      )
      .then((res) => {
        console.log(
          "🚀 ~ file: index.js ~ line 23 ~ axios.get ~ res",
          res.data.user.role
        );
        if (res?.data?.user?.role === 0) {
          router.push("/admin");
        }
        localStorage.setItem("userD", JSON.stringify(res.data.user));
        // setTemp(true);
      })
      .catch((err) => {
        console.log("🚀 ~ file: index.js ~ line 25 ~ axios.get ~ err", err);
      });
  }, []);

  // const images2 = [recent1, recent2];

  return (
    // temp && (
    <>
      <Head>
        <title>Dashboard | Share It</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Carousel */}
      <Carousel />

      {/* StoryTable */}
      <div className="my-16 px-10">
        <StoryTable leagues={leagues} stories={stories} />
      </div>

      {/* Cards Slider */}
      <div className="px-10 mb-10">
        <h1 className="mt-10 text-3xl font-bold text-gray-800 dark:text-white">
          Leagues
        </h1>
        <div className="flex items-end flex-col">
          <div className="mb-4">
            <Link href="/">
              <a className="flex justify-center items-center gap-1 text-purple-600 font-semibold">
                See More <ChevronRightIcon className="w-4 h-4" />
              </a>
            </Link>
          </div>
          {/* <CardSlider images={imagesData} rounded={true} /> */}
          <CardSlider leagues={leagues} rounded={true} />
        </div>
      </div>
      {/* <div className="px-10 mb-5">
        <h1 className="mt-10 text-3xl font-bold text-gray-800 dark:text-white">
          Recently Added
        </h1>
        <div className="flex items-end flex-col">
          <div className="mb-4">
            <Link href="/">
              <a className="flex justify-center items-center gap-1 text-purple-600 font-semibold">
                See More <ChevronRightIcon className="w-4 h-4" />
              </a>
            </Link>
          </div>
          <CardSlider images={images2} rounded={false} />
        </div>
      </div> */}

      {/* Fab */}
      <Button
        to="/dashboard/league/add"
        text={<PlusIcon className="w-6" />}
        classes="fixed p-[0!important] z-30 bottom-10 right-8 shadow-lg bg-blue-400[!important] w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-500 hover:drop-shadow-2xl hover:-translate-y-2 duration-300"
      />
      <Footer />
    </>
    // )
  );
};

export default dashboard;

export const getServerSideProps = async (context) => {
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
    props: { leagues: leaguesRes.data, stories: storiesRes.data },
  };
};
