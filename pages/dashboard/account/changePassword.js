import axios from "axios";
import React, { useState } from "react";
import Header from "../../../components/dashboard/Header";
import StoryHeader from "../../../components/dashboard/StoryHeader";
import Wrapper from "../../../components/dashboard/Wrapper";
import Input from "../../../components/layout/Input";
import { BASE_URL } from "../../../utils/api";
import Cookies from "js-cookie";

const changePassword = () => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const UserId = JSON.parse(Cookies.get("user"))?._id;

    const { newPassword, confirmPassword } = passwords;

    if (!newPassword || !confirmPassword) {
      setError(true);
      setSuccess(false);
      setErrorMessage("Fields can't be empty");
    } else {
      if (newPassword === confirmPassword) {
        setError(false);
        setLoading(true);

        //Change Password REQUEST
        axios
          .post(`${BASE_URL}/user/ChangePassword`, {
            id: UserId,
            password: newPassword,
          })
          .then((res) => {
            setSuccess(true);
            setSuccessMessage("Password has been changes successfully.");
            setLoading(false);
          })
          .catch((err) => {
            setError(true);
            setSuccess(false);
            setErrorMessage("An error occurred");
            setLoading(false);
          });
      } else {
        setError(true);
        setSuccess(false);
        setErrorMessage("Passwords doesn't match");
      }
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <StoryHeader />
        <div className="pt-5 pb-10">
          <h2 className="font-bold text-2xl">Change Password</h2>
          <div className="my-3">
            <hr />
          </div>
          <div className="w-1/2 my-10">
            {error && (
              <div className="my-2">
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative"
                  role="alert"
                >
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline"> {errorMessage}</span>
                </div>
              </div>
            )}
            {success && (
              <div className="my-2">
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative"
                  role="alert"
                >
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline"> {successMessage}</span>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  New Password
                </label>
                <Input
                  type="password"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  disabled={loading ? true : false}
                  type="submit"
                  className="w-full py-2 px-10 bg-purple-700 font-bold hover:bg-purple-900 hover:shadow-2xl text-white rounded transition duration-300 shadow-sm ease-in-out "
                >
                  {loading ? "Changing password..." : "Change Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default changePassword;
