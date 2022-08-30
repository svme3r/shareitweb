import Footer from "../components/layout/Footer";
import Form from "../components/layout/Form";
import Navbar from "../components/layout/Navbar";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import heroImg from "/public/assets/hero-img.png";
import googleLogo from "/public/assets/google.png";
import facebookLogo from "/public/assets/facebook.png";
import Image from "next/image";
import SigninButton from "../components/sections/signin/SigninButton";
import Input from "../components/layout/Input";
import Link from "next/link";
// import { getCsrfToken, getProviders } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import Head from "next/head";
import Cookies from "js-cookie";

const SignIn = () => {
  // const { data: session } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    axios
      .post(`${BASE_URL}/login/login`, {
        email,
        password,
      })
      .then((res) => {
        setError(false);
        setLoading(false);

        //Resetting Textboxes
        setEmail("");
        setPassword("");

        console.log(
          "🚀 ~ file: signin.js ~ line 32 ~ handleSubmit role ~ res",
          typeof res?.data?.user?.role
        );

        //setting up localStorage
        localStorage.setItem("user", JSON.stringify(res.data.user));

        //setting up Cookies
        Cookies.set("token", res.data.token);
        Cookies.set("user", JSON.stringify(res.data.user));
        Cookies.set("role", JSON.stringify(res.data.role));

        //Checking RoleId and Redirecting...
        res?.data?.role?.map((i) => {
          if (i.roleId === "630752d075e22cc27dd9dc98") {
            //Admin RoleId
            router.replace("/admin");
            Cookies.set("roleType", "admin");
          } else if (i.roleId === "6307530b75e22cc27dd9dc9a") {
            //Monitor RoleId
            router.replace("/admin");
            Cookies.set("roleType", "monitor");
          } else if (i.roleId === "6307531675e22cc27dd9dc9c") {
            //User RoleId
            router.replace("/dashboard");
            Cookies.set("roleType", "user");
          }
        });
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log("🚀 ~ file: signin.js ~ line 34 ~ handleSubmit ~ err", err);
      });
  };

  return (
    <>
      <Head>
        <title>Sign In | ShareIt</title>
      </Head>
      <Navbar />

      {/* SignIn Form */}
      <section className="py-10">
        <div className="px-6 md:px-40 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 h-auto">
              <div className="w-2/3 h-2/3 ml-auto">
                <Image
                  src={heroImg}
                  layout="intrinsic"
                  objectFit="contain"
                  alt="Sample image"
                />
              </div>
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 bg-white p-10 rounded-md shadow-xl">
              <h1 className="text-2xl text-purple-900 font-bold">
                Welcome Back!
              </h1>
              {error && (
                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-3">
                  <p className="font-semibold">Invalid login details</p>
                </div>
              )}
              <div>
                <div>
                  <SigninButton
                    image={googleLogo}
                    text="Google"
                    classes="mt-5"
                  />
                  <SigninButton
                    image={facebookLogo}
                    text="Facebook"
                    classes="mt-5"
                  />
                </div>
              </div>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <Input
                    type="text"
                    placeholder="Email address"
                    name="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className="mb-6">
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgotPassword">
                    <a className="text-gray-800">Forgot password?</a>
                  </Link>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    disabled={loading ? true : false}
                    type="submit"
                    className="py-3 px-10 bg-purple-700 hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-lg ease-in-out"
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don&apos;t have an account?&nbsp;
                    <Link
                      href="/signup"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      <a>SignUp</a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* SignIn Form */}

      <Footer />
    </>
  );
  // }
};

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const providers = await getProviders();
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//       providers,
//       query,
//     },
//   };
// }

export default SignIn;
