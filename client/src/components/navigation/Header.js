import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

//icons
import { MdManageAccounts } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
//image
import defaultWebp from "../../assets/images/default.webp";

const Header = () => {
  const { currentUser, handleLogout } = useContext(AuthContext);
  const { theme, setTheme, colorTheme } = useContext(ThemeContext);

  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex w-full min-w-[320px] items-center justify-between border-b-[0.1rem]  border-secondary-300 bg-secondary-100 p-2 dark:bg-darkmode md:container md:mx-auto">
      <Link
        to="/"
        className="text-xl font-bold text-secondary-600 hover:opacity-80 dark:text-secondary-100"
      >
        Tech
        <span className="text-primary">note</span>
      </Link>
      {currentUser && (
        <div className="center-content absolute right-10">
          <p className="text-[0.7rem] font-semibold uppercase dark:text-secondary-400 text-secondary-500">
            {currentUser?.username}
          </p>
          <div className="ml-2 h-8 w-8 overflow-hidden rounded-full border-2 border-secondary-400 bg-primary">
            <img
              className="h-full w-full object-cover object-center"
              src={defaultWebp}
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
      {theme === "light" ? (
        <svg
          className="hover h-6 w-6 cursor-pointer text-secondary-500 hover:text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setTheme(colorTheme)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="hover:text-ye h-6 w-6 cursor-pointer text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setTheme(colorTheme)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </div>
  );
};

export default Header;
