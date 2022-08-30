import React, { useEffect, useState } from "react";
import Header from "../../../components/dashboard/Header";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import Wrapper from "../../../components/dashboard/Wrapper";
// import { getSession } from "next-auth/react";
import Footer from "../../../components/layout/Footer";

const DeleteAccount = () => {
  const [selectedRadio,setSelectedRadio] = useState('');
  const [showReasonBox,setShowReasonBox] = useState(false);
  const [reason,setReason] = useState('');

  useEffect(()=>selectedRadio === 'other' ? setShowReasonBox(true) : setShowReasonBox(false),[selectedRadio])

  const handleChange = (e) => {
    setSelectedRadio(e.target.value);
    console.log(e.target.value);
  }

  const handleReasonChange = (e) => {
    setReason(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <Header />
      <Wrapper>
        <StoryHeader />
        <div className="mb-5">
          <h2 className="font-bold text-xl">
            Are you sure you want to delete your account?
          </h2>
          <div className="my-3">
            <hr />
          </div>
          <p className="text-sm text-gray-600">
            Please Let us know the reason you are leaving
          </p>  
        </div>
        <div className="space-y-2">
          <div>
            <label className="text-lg font-semibold cursor-pointer">
              <input type="radio" name="deleteReason" value="Option 1" onChange={handleChange} /> This app wasted my time
            </label>
          </div>
          <div>
            <label className="text-lg font-semibold cursor-pointer">
              <input type="radio" name="deleteReason"  value="Option 2" onChange={handleChange} /> This app wasted my time
            </label>
          </div>
          <div>
            <label className="text-lg font-semibold cursor-pointer">
              <input type="radio" name="deleteReason"  value="Option 3" onChange={handleChange} /> This app wasted my time
            </label>
          </div>
          <div>
            <label className="text-lg font-semibold cursor-pointer">
              <input type="radio" name="deleteReason"  value="other" onChange={handleChange} /> Other
            </label>
          </div>
          <div>
            <textarea className={`${!showReasonBox && "hidden"} outline-none border p-3 rounded-md w-full md:w-1/2`} placeholder="Type here" value={reason} onChange={handleReasonChange} ></textarea>
          </div>
          <div className="py-3">
            <button className="py-1 px-10 bg-purple-700 font-bold hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-lg ease-in-out ">
              Continue to Account Deletion
            </button>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default DeleteAccount;

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
