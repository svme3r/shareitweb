import { useRouter } from "next/router";
import Header from "../../../../components/dashboard/Header";
import ParticipantsCard from "../../../../components/dashboard/Prizes/ParticipantsCard";
import StoryHeader from "../../../../components/dashboard/StoryHeader";
import Wrapper from "../../../../components/dashboard/Wrapper";
import Footer from "../../../../components/layout/Footer";
import { storiesApi } from "../../../../data/data";
// import { getSession } from "next-auth/react";
import { BASE_URL } from "../../../../utils/api";
import axios from "axios";

const Participants = ({ stories }) => {
  console.log(
    "🚀 ~ file: index.js ~ line 13 ~ Participants ~ stories",
    stories
  );
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const filteredStoriesByLeague = stories.filter((item)=>{
    return item.LeagueId === id
  })

  console.log("🚀 ~ file: index.js ~ line 24 ~ filteredStoriesByLeague ~ filteredStoriesByLeague", filteredStoriesByLeague)

  return (
    <>
      <Header />
      <Wrapper>
        <StoryHeader />
        <div className="py-5">
          <div className="flex justify-center gap-10 flex-wrap">
            {filteredStoriesByLeague?.map((item, index) => {
              return (
                <ParticipantsCard
                  key={index}
                  title={item.Title}
                  thumbnail={item.Thumbnail}
                  onClick={() =>
                    router.push(
                      {
                        pathname: `/dashboard/league/participants/${item._id}`,
                        query: item,
                      },
                      `/dashboard/league/participants/${item._id}`
                    )
                  }
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Participants;

export const getServerSideProps = async (context) => {
  // const session = await getSession(context);
  const storiesRes = await axios.get(`${BASE_URL}/Stories/homestories`);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //     },
  //   };
  // }

  return {
    props: {  stories: storiesRes.data },
  };
};
