import { LogoutIcon } from "@heroicons/react/outline";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Header = ({ heading, className }) => {
  const router = useRouter();
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserRole(user?.role);
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("role");
    Cookies.remove("roleType");
    router.replace("/");
  };
  return (
    <div
      className={
        "bg-gray-600 flex justify-between shadow py-5 px-5 text-white font-semibold duration-300 " +
        className
      }
    >
      <span>{heading}</span>
      <span>
        {userRole === "0" ? "Admin" : userRole === "1" ? "Monitor" : ""}
      </span>
      <span>
        <LogoutIcon className="w-6 cursor-pointer" onClick={logout} />
      </span>
    </div>
  );
};

export default Header;
