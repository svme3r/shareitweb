import { PencilIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../../components/dashboard/Header";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import Wrapper from "../../../components/dashboard/Wrapper";
import Footer from "../../../components/layout/Footer";
// import { getSession } from "next-auth/react";


const Payment = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return (
    <>
      <Header />
      <Wrapper>
        <StoryHeader />
        <div className="pt-5 flex justify-between">
          <div className="flex space-x-3">
            <div className="w-8">
              <Image
                src="/assets/payment.png"
                width={100}
                height={100}
                objectFit="contain"
              />
            </div>
            <h2 className="font-semibold text-lg">Payment Method</h2>
          </div>
          <div>
            <PencilIcon className="w-6 text-purple-600" />
          </div>
        </div>
        <div className="py-5">
          <hr />
        </div>
        {/* Payment Methods */}
        <div>
          <ul>
            <li>
              <label className="flex space-x-4 cursor-pointer">
                <div className="w-7">
                  <Image
                    src="/assets/visa.png"
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </div>
                <div className="flex gap-5 items-center">
                  Visa Card <input type="radio" name="payment" />
                </div>
              </label>
            </li>
            <li>
              <label className="flex space-x-4 cursor-pointer">
                <div className="w-7">
                  <Image
                    src="/assets/credit.png"
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </div>
                <div className="flex gap-5 items-center">
                  Credit Card <input type="radio" name="payment" />
                </div>
              </label>
            </li>
            <li>
              <Link href="/dashboard/coins/addCard">
                <a>
                  <label className="flex space-x-4 cursor-pointer">
                    <div className="w-7">
                      <Image
                        src="/assets/addcard.png"
                        width={100}
                        height={100}
                        objectFit="contain"
                      />
                    </div>
                    <div className="flex gap-5 items-center">Add Card</div>
                  </label>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-3">
          <hr />
        </div>
        {/* Ammount */}
        <div className="flex flex-col items-end pb-7 space-y-5">
          <h4 className="font-semibold text-xl">
            Amount <span className="text-gray-700">$1000</span>
          </h4>
          <div className="space-x-4">
            <button className="py-1 px-3 font-bold hover:bg-purple-900 hover:shadow-2xl hover:text-white text-purple-700 rounded transition duration-300 ease-in-out ">
              Cancel
            </button>
            <button className="py-1 px-10 bg-purple-700 font-bold hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-lg ease-in-out ">
              Confirm &amp; Go Home
            </button>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Payment;

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
