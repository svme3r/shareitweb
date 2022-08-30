import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "/public/assets/hero-img.png";
import Button from "./Button";
import SigninButton from "../sections/signin/SigninButton";
import googleLogo from "/public/assets/google.png";
import facebookLogo from "/public/assets/facebook.png";
import Input from "./Input";
import { signIn } from "next-auth/react";
import axios from "axios";
import { BASE_URL } from "../../utils/api";
import { useRouter } from "next/router";

const Form = ({ isLoginForm, heading, buttonText }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: 2,
    createdOn: new Date()
  });

  const [emptyFieldAlert, setEmptyFieldAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [alreadyExistError, setAlreadyExistError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.email != "" ||
      formData.password != "" ||
      formData.username != ""
    ) {
      setEmptyFieldAlert(false);
      if (isLoginForm) {
        console.log("You are in login form");
        signIn();
      } else {
        const res = await axios.post(`${BASE_URL}/login/signup`, formData);
        console.log("res", res);
        if (res.status == 201) {
          setErrorAlert(false);
          setSuccessAlert(true);
          router.push("signin");
        } else {
          if (res.data.status === 203) {
            setAlreadyExistError(true);
          }
          setErrorAlert(true);
          setSuccessAlert(false);
        }
      }
    } else {
      setEmptyFieldAlert(true);
    }
  };

  return (
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
            <h1 className="text-2xl text-purple-900 font-bold">{heading}</h1>
            {/* Success Alert Message */}
            {successAlert && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-3">
                <p className="font-semibold">Account created successfylly</p>
              </div>
            )}
            {/* Error Alert Message */}
            {errorAlert && (
              <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-3">
                <p className="font-semibold">
                  {alreadyExistError
                    ? "User already exists"
                    : "An error occurred"}
                </p>
              </div>
            )}
            {/* Empty Fields Error Alert Message */}
            {emptyFieldAlert && (
              <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-3">
                <p className="font-semibold">Please fill input fields</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <SigninButton
                  href="/"
                  image={googleLogo}
                  text="Google"
                  classes="mt-5"
                  onClick={() => signIn()}
                  isLoginForm={isLoginForm}
                />
                <SigninButton
                  href="/"
                  image={facebookLogo}
                  text="Facebook"
                  classes="mt-5"
                  onClick={() => signIn()}
                  isLoginForm={isLoginForm}
                />
              </div>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>

              {!isLoginForm && (
                <div className="mb-6">
                  <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="mb-6">
                <Input
                  type="text"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* {!isLoginForm && (
                <div className="mb-6">
                  <Input type="password" placeholder="Confirm Password" />
                </div>
              )} */}

              {isLoginForm && (
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
                  <a href="#!" className="text-gray-800">
                    Forgot password?
                  </a>
                </div>
              )}

              <div className="text-center lg:text-left">
                {/* <Button to={"/"} text={buttonText} /> */}
                <button
                  type="submit"
                  className="py-3 px-10 bg-purple-700 hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-lg ease-in-out"
                >
                  {buttonText}
                </button>
                {isLoginForm ? (
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don&apos;t have an account?&nbsp;
                    <Link
                      href="/signup"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      <a>SignUp</a>
                    </Link>
                  </p>
                ) : (
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?&nbsp;
                    <Link
                      href="/signin"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      <a>SignIn</a>
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
