import Header from "../../../components/dashboard/Header";
import Wrapper from "../../../components/dashboard/Wrapper";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import Footer from "../../../components/layout/Footer";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";
// import { getSession } from "next-auth/react";

const settings = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <StoryHeader />
        <div className="py-5">
          <h2 className="text-center font-bold text-2xl">Account Setting</h2>
          <div className="px-4">
            <div className="my-2">
              <Link href="/dashboard/account">
                <a>
                  <p className="font-semibold">Edit Profile</p>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/dashboard/account/changePassword">
                <a>
                  <p className="font-semibold">Change Password</p>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/">
                <a>
                  <p className="font-semibold">Edit Profile</p>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/dashboard/coins/payment">
                <a>
                  <p className="font-semibold">Payment Method</p>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/">
                <a>
                  <p className="font-semibold">Notifications</p>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/dashboard/coins/payment">
                <a>
                  <div className="flex justify-between">
                    <p className="font-semibold">Payment Methods</p>
                    <ChevronRightIcon className="w-5 text-gray-600" />
                  </div>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/">
                <a>
                  <div className="flex justify-between">
                    <p className="font-semibold">Contact Us</p>
                    <ChevronRightIcon className="w-5 text-gray-600" />
                  </div>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/">
                <a>
                  <div className="flex justify-between">
                    <p className="font-semibold">Privacy</p>
                    <ChevronRightIcon className="w-5 text-gray-600" />
                  </div>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/">
                <a>
                  <div className="flex justify-between">
                    <p className="font-semibold">Legal</p>
                    <ChevronRightIcon className="w-5 text-gray-600" />
                  </div>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/dashboard/account/delete">
                <a>
                  <div className="flex justify-between">
                    <p className="font-bold">Delete Account</p>
                    <ChevronRightIcon className="w-5 text-gray-600" />
                  </div>
                  <hr className="my-2 dark:border-gray-700" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default settings;

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
