import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Card from "../../../components/dashboard/Card";
import Header from "../../../components/dashboard/Header";
import Footer from "../../../components/layout/Footer";
import { BASE_URL } from "../../../utils/api";

const Search = ({ query, leagues }) => {
  return (
    <>
    <Head>
        <title>{query} - Search | ShareIt</title>
    </Head>
      <Header />

      {/* Searched Items Area */}
      <div className="p-5 m-5 bg-white dark:bg-gray-800 rounded-xl">
        <h2 className="font-bold text-2xl my-3 text-gray-800 dark:text-white">
          Searched Leagues
        </h2>
        <div className="flex flex-wrap justify-center">
          {leagues
            ?.filter((val) => {
              if (query === "") {
                return val;
              } else if (
                val.Title.toLowerCase().includes(query.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => {
              return (
                <Link href={"/dashboard/league/" + item._id}>
                  <a
                    className={`w-[200px] m-2 h-[40vh] rounded-xl overflow-hidden ${
                      !item.thumbnail && "animate-pulse"
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      className={`object-cover w-full h-full rounded-xl hover:scale-105 duration-300`}
                    />
                  </a>
                </Link>
              );
            })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const query = context.query.query;

  const res = await axios.get(`${BASE_URL}/leagues/home`);

  return {
    props: { query, leagues: res.data }, // will be passed to the page component as props
  };
}

export default Search;
