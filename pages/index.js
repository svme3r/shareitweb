import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutSection from "../components/sections/home/AboutSection";
import Hero from "../components/sections/home/Hero";
import Section from "../components/sections/home/Section";
import heroImg from "/public/assets/hero-img.png";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import StoryTable from "../components/StoryTable/StoryTable";
import WinnerSection from "../components/sections/home/WinnerSection";
import CardSlider from "../components/dashboard/CardSlider";
// import { ChevronRightIcon } from "@heroicons/react/solid";
// import Link from "next/link";

export default function Home({ leagues, stories }) {
  return (
    <div>
      <Head>
        <title>ShareIt</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Slider */}
      <Hero />

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
            {/* <Link href="/">
              <a className="flex justify-center items-center gap-1 text-purple-600 font-semibold">
                See More <ChevronRightIcon className="w-4 h-4" />
              </a>
            </Link> */}
          </div>
          {/* <CardSlider images={imagesData} rounded={true} /> */}
          <CardSlider leagues={leagues} rounded={true} />
        </div>
      </div>

      {/* Sections */}
      <Section
        isImageFirst={false}
        image={heroImg}
        heading="Share a Story"
        buttonText="Explore Now"
        buttonLink="/"
        paragraph="Tell us a true story about a life event according to league and make it go viral on our platform. With Share it, you can easily find and share stories that inspire you. So, whether you're a seasoned pro or just getting started, Share-it is the perfect place to share your stories as par league."
      />
      <Section
        isImageFirst={true}
        image={heroImg}
        heading="Leauge"
        buttonText="Download App"
        buttonLink="/"
        paragraph="League is a category in which you can share a story. You have to post according to the criteria set in each league."
      />
      <Section
        isImageFirst={false}
        image={heroImg}
        heading="Competition"
        buttonText="Create Account"
        buttonLink="/"
        paragraph="There will be a competition between different people competing in each league. 
        So create a compelling story as a par league to get the most Up-votes, compete with others and win a reward."
      />
      <Section
        isImageFirst={true}
        image={heroImg}
        heading="Up-vote"
        buttonText="Create Account"
        buttonLink="/"
        paragraph="Turn a Winning Moment into a Win: Earn up-votes on Share It to earn valuable rewards.
        Up-vote a story you like, as the story that gets the most up-votes will be considered the winner."
      />
      <Section
        isImageFirst={false}
        image={heroImg}
        heading="Winners"
        buttonText="Create Account"
        buttonLink="/"
        paragraph="A story that gets the most votes will be considered a winner.
        And it doesn't end there because the winner will get a reward in the form of coins.
        
        (Note: Coins are withdrawable)
        
        Share stories, according to a league, from a unique point of view to stand out from everyone else and get rewarded for it.
        So, enroll yourself in a league, share your story, earn exciting rewards and be in the spotlight of our page if you are declared a winner."
      />
      <Section
        isImageFirst={true}
        image={heroImg}
        heading="Get inspiration"
        buttonText="Create Account"
        buttonLink="/"
        paragraph="Including coins and the opportunity to be in the spotlight! Get Inspired! -Share it and provide inspirational stories from people like you! We are offering a platform where anyone, including storytellers, novelists, etc., can find what they're looking for."
      />

      {/* Winner Section */}
      <WinnerSection />

      {/* Winner 2 */}
      <div className="my-16 px-10">
        <h2 className="text-center font-bold text-4xl">Winners</h2>
        <StoryTable leagues={leagues} stories={stories} />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const leaguesRes = await axios.get(`${BASE_URL}/leagues/home`);
  const storiesRes = await axios.get(`${BASE_URL}/Stories/homestories`);

  return {
    props: { leagues: leaguesRes.data, stories: storiesRes.data },
  };
};
