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

const ForgotPassword = ({ query }) => {
  const router = useRouter();

  const { t } = router.query;

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (t) {
      if (newPassword === confirmPassword) {
        axios
          .post(
            `${BASE_URL}/login/forgortPassword`,
            {
              password: newPassword,
            },
            {
              headers: {
                ACESS_TOKEN: t,
              },
            }
          )
          .then((res) => {
            setEmail("");
            setLoading(false);
            setSuccess(true);
            setError(false);
            router.replace("/signin");
            setSuccessMessage("Password has been chenged successfully.");
            console.log(
              "🚀 ~ file: forgotPassword.js ~ line 31 ~ handleSubmit ~ res",
              res
            );
          })
          .catch((err) => {
            setErrorMessage("An error occurred.");
            setLoading(false);
            setSuccess(false);
            setError(true);
            console.log(
              "🚀 ~ file: forgotPassword.js ~ line 33 ~ handleSubmit ~ err",
              err
            );
          });
      } else {
        setErrorMessage("Password doesn't match.");
        setLoading(false);
        setSuccess(false);
        setError(true);
      }
    } else {
      axios
        .post(`${BASE_URL}/login/resetPasswordMail`, {
          email,
        })
        .then((res) => {
          setEmail("");
          setLoading(false);
          setSuccessMessage("Check your inbox");
          setSuccess(true);
          setError(false);
          console.log(
            "🚀 ~ file: forgotPassword.js ~ line 31 ~ handleSubmit ~ res",
            res
          );
        })
        .catch((err) => {
          setLoading(false);
          setSuccess(false);
          setError(true);
          setErrorMessage("An error occurred.");
          console.log(
            "🚀 ~ file: forgotPassword.js ~ line 33 ~ handleSubmit ~ err",
            err
          );
        });
    }
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
                {t ? "Reset Password" : "Forgot Password"}
              </h1>
              <small className="block mt-1 text-gray-400">
                Confirm your email and we'll send the instructions.
              </small>
              {/* Success Message */}
              {success && (
                <div className="my-3 mb-2">
                  <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative"
                    role="alert"
                  >
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> {successMessage}</span>
                  </div>
                </div>
              )}
              {/* Error Message */}
              {error && (
                <div className="my-3 mb-2">
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative"
                    role="alert"
                  >
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> {errorMessage}</span>
                  </div>
                </div>
              )}
              <form className="my-5" onSubmit={handleSubmit}>
                {!t && (
                  <div className="mb-6">
                    <Input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                )}
                {t && (
                  <>
                    <div className="mb-6">
                      <Input
                        type="password"
                        placeholder="New password"
                        name="newPassword"
                        required={true}
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                      />
                    </div>
                    <div className="mb-6">
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                      />
                    </div>
                  </>
                )}

                <div className="text-center lg:text-left">
                  <button
                    disabled={loading ? true : false}
                    type="submit"
                    className="py-3 px-10 bg-purple-700 hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-lg ease-in-out"
                  >
                    {/* {loading && !t ? "Sending..." : "Send"} */}
                    {loading ? "Processing..." : t ? "Reset Password" : "Send"}
                  </button>
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
};
export default ForgotPassword;
