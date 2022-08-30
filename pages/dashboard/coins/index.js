import Header from "../../../components/dashboard/Header";
import Footer from "../../../components/layout/Footer";
import Wrapper from "../../../components/dashboard/Wrapper";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import CoinsDealCard from "../../../components/dashboard/Coins/CoinsDealCard";
import CoinsHistoryCard from "../../../components/dashboard/Coins/CoinsHistoryCard";
import { useRouter } from "next/router";
// import { getSession } from "next-auth/react";


const Coins = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Wrapper>
        <StoryHeader />
        {/* Heading */}
        <div className="py-5">
          <h1 className="text-3xl font-bold my-3">Coins Deals</h1>
          <hr />
        </div>
        {/* Deal Cards */}
        <div className="py-8 flex flex-col space-y-3">
          <CoinsDealCard
            coins={2000}
            arrowUp={false}
            isBuy={true}
            buttonAmmount="1000"
            onClick={() => {
              router.push(
                {
                  pathname: "/dashboard/coins/payment",
                  query: {
                    coins: 2000,
                    ammount: 1000,
                  },
                },
                "/dashboard/coins/payment"
              );
            }}
          />
          <CoinsDealCard
            coins={5000}
            arrowUp={false}
            isBuy={true}
            buttonAmmount="2000"
            onClick={() => {
              router.push(
                {
                  pathname: "/dashboard/coins/payment",
                  query: {
                    coins: 2000,
                    ammount: 1000,
                  },
                },
                "/dashboard/coins/payment"
              );
            }}
          />
          <CoinsDealCard
            coins={7500}
            arrowUp={false}
            isBuy={true}
            buttonAmmount="3000"
            onClick={() => {
              router.push(
                {
                  pathname: "/dashboard/coins/payment",
                  query: {
                    coins: 2000,
                    ammount: 1000,
                  },
                },
                "/dashboard/coins/payment"
              );
            }}
          />
          <CoinsDealCard
            coins={2000}
            arrowUp={true}
            isBuy={false}
            buttonAmmount="1000"
            onClick={() => {
              router.push(
                {
                  pathname: "/dashboard/coins/payment",
                  query: {
                    coins: 2000,
                    ammount: 1000,
                  },
                },
                "/dashboard/coins/payment"
              );
            }}
          />
          <CoinsDealCard
            coins={5000}
            arrowUp={true}
            isBuy={false}
            buttonAmmount="2000"
            onClick={() => {
              router.push(
                {
                  pathname: "/dashboard/coins/payment",
                  query: {
                    coins: 2000,
                    ammount: 1000,
                  },
                },
                "/dashboard/coins/payment"
              );
            }}
          />
          <CoinsDealCard
            coins={7500}
            arrowUp={true}
            isBuy={false}
            buttonAmmount="3000"
          />
        </div>
        {/* Heading */}
        <div className="py-5">
          <h1 className="text-3xl font-bold my-3">History</h1>
          <hr />
        </div>
        {/* Coins History */}
        <div className="py-8 flex flex-col space-y-3">
          <CoinsHistoryCard
            actionText="Buy"
            arrowUp={false}
            coins={7500}
            ammount={3000}
            date="29 Jun 2022"
          />
          <CoinsHistoryCard
            actionText="Win"
            arrowUp={false}
            coins={7500}
            ammount={3000}
            date="29 Jun 2022"
          />
          <CoinsHistoryCard
            actionText="Sell"
            arrowUp={true}
            coins={7500}
            ammount={3000}
            date="29 Jun 2022"
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Coins;


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
