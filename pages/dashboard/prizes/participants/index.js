import { useRouter } from "next/router";
import Header from "../../../../components/dashboard/Header";
import ParticipantsCard from "../../../../components/dashboard/Prizes/ParticipantsCard";
import StoryHeader from "../../../../components/dashboard/StoryHeader";
import Wrapper from "../../../../components/dashboard/Wrapper";
import Footer from "../../../../components/layout/Footer";
import { storiesApi } from "../../../../data/data";
// import { getSession } from "next-auth/react";


const Participants = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);

  return (
    <>
      <Header />
      <Wrapper>
        <StoryHeader />
        <div className="py-5">
          <div className="flex justify-center gap-10 flex-wrap">
            {storiesApi.map((item, index) => {
              return (
                <ParticipantsCard
                  key={index}
                  title={item.Title}
                  onClick={() =>
                    router.push(
                      {
                        pathname: `/dashboard/prizes/participants/${item._id}`,
                        query: item,
                      },
                      `/dashboard/prizes/participants/${item._id}`
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
