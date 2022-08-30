import Head from "next/head";
import React from "react";
import Footer from "../components/layout/Footer";
import Form from "../components/layout/Form";
import Navbar from "../components/layout/Navbar";

const signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up | ShareIt</title>
      </Head>
      <Navbar />
      <Form
        heading="Create An Account"
        isLoginForm={false}
        buttonText="Sign Up"
      />
      <Footer />
    </>
  );
};

export default signup;
