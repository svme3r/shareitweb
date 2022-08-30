import React from "react";
import Header from "../../../components/dashboard/Header";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import Wrapper from "../../../components/dashboard/Wrapper";
import Footer from "../../../components/layout/Footer";
import Input from "../../../components/layout/Input";
// import { getSession } from "next-auth/react";

const addCard = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <StoryHeader />
        <div className="pt-5 pb-10">
          <h2 className="font-bold text-2xl">Add a credit or debit card</h2>
          <div className="my-3">
            <hr />
          </div>
          <div className="w-1/2">
            <form className="flex flex-col space-y-3">
              <div>
                <label className="text-gray-600 font-semibold text-sm">Card Number</label>
                <Input />
              </div>
              <div>
                <label className="text-gray-600 font-semibold text-sm">MM / YY</label>
                <Input />
              </div>
              <div>
                <label className="text-gray-600 font-semibold text-sm">CVC</label>
                <Input />
              </div>
              <div>
                <label className="text-gray-600 font-semibold text-sm">Name of the card holder</label>
                <Input />
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  {" "}
                  Save this card for a faster checkout next time
                </label>
              </div>
              <div>
                <button className="w-full py-2 px-10 bg-purple-700 font-bold hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-sm ease-in-out ">
                  Done
                </button>
              </div>
              <div>
                <button className="w-full py-2 px-10 font-bold hover:bg-purple-900 hover:shadow-2xl hover:text-white text-purple-600 rounded transition duration-300 ease-in-out ">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default addCard;

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

