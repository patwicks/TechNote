import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

//icons
import { MdManageAccounts } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const { currentUser, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex w-full min-w-[320px] items-center justify-between border-b-[0.1rem]  border-secondary-300 bg-secondary-100 p-2 md:container md:mx-auto">
      <Link
        to="/"
        className="text-xl font-bold text-secondary-600 hover:opacity-80"
      >
        Tech
        <span className="text-primary">note</span>
      </Link>
      {currentUser && (
        <div className="center-content">
          <p className="text-[0.7rem] font-semibold uppercase text-secondary-500">
            {currentUser?.username}
          </p>
          <div className="ml-2 h-8 w-8 overflow-hidden rounded-full border-2 border-secondary-400 bg-primary">
            <img
              className="h-full w-full object-cover object-center"
              src={require("../../assets/images/default.png")}
              alt="Profile"
            ></img>
          </div>

          <MdManageAccounts
            className="smooth-transition ml-2 cursor-pointer text-2xl text-secondary-400 hover:text-secondary-500"
            onClick={() => navigate("/account")}
          />
          <IoMdLogOut
            className="smooth-transition ml-1 cursor-pointer text-xl text-secondary-400 hover:text-error-200"
            onClick={() => {
              handleLogout();
              setTimeout(() => {
                navigate("/");
              }, 2000);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
