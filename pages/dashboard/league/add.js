import React, { useEffect, useState } from "react";
import Header from "../../../components/dashboard/Header";
import PostBox from "../../../components/dashboard/Post/PostBox";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import Wrapper from "../../../components/dashboard/Wrapper";
import Footer from "../../../components/layout/Footer";
import Button from "../../../components/layout/Button";
// import { getSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { PostStory } from "../../../redux/reducers/Stories";
import axios from "axios";
import { postRequest } from "../../../utils/fetch";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../utils/api";
import Cookies from "js-cookie";

const add = ({ id }) => {
  const [story, setStory] = useState("");
  const [userID, setUserID] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const data = JSON.parse(Cookies.get("user"));
    // const data = JSON.parse(localStorage.getItem("userD"));
    setUserID(data?._id);
    console.log(
      "🚀 ~ file: add.js ~ line 25 ~ useEffect ~ data._id",
      data?._id
    );
  }, []);

  const handleClick = () => {
    console.log(story);
    const data = {
      Author_id: `${userID}`,
      Title: "",
      Stroy: `${story}`,
      Thumbnail: "",
      LeagueId: `${id}`,
      Rating: [],
      Monitor_Rating: [],
      Admin_Rating: 12345,
      Liked: 12345,
      Report: 12345,
      Comments: [],
      Win: [],
    };
    axios
      .post(`${BASE_URL}/stories/createStory`, data)
      .then((res) => {
        console.log("🚀 ~ file: add.js ~ line 26 ~ handleClick ~ res", res);
        // setStory("");
        setAlert(true);
      })
      .catch((err) => {
        console.log("🚀 ~ file: add.js ~ line 28 ~ handleClick ~ err", err);
        setAlert(false);
      });
  };

  return (
    <>
      <Header />

      <Wrapper className="pb-4">
        {/* Story Header */}
        <StoryHeader />
        <div className="mb-9">
          <h1 className="text-3xl font-bold py-5">Add Post</h1>

          {/* Success Alert */}
          {alert && (
            <div className="m-2">
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline">
                  {" "}
                  Story has been uploaded successfully.
                </span>
              </div>
            </div>
          )}

          <PostBox onChange={(e) => setStory(e)} />
          <div className="text-center">
            <h5 className="my-4">
              <strong>Note: </strong>You will be charge 5 coins against each
              post
            </h5>
            <button
              onClick={handleClick}
              className="py-3 px-10 bg-purple-700 hover:bg-purple-900 hover:shadow-2xl text-white transition duration-300 shadow-lg ease-in-out rounded-full font-bold"
            >
              Post Story
            </button>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default add;

export const getServerSideProps = async (context) => {
  // const session = await getSession(context);
  const { id } = context.query;

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //     },
  //   };
  // }

  return {
    props: { id },
  };
};
