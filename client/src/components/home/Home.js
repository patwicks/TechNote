import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Login from "../forms/Login";
import Tasks from "../task/Tasks";
import SpinLoader from "../utilities/SpinLoader";

const Home = () => {
  const { authLoading, isLogin } = useContext(AuthContext);
  return (
    <div className="h-screen w-screen min-w-[320px] md:container">
      <>
        {authLoading ? (
          <div className="mt-20 text-center">
            <SpinLoader />
          </div>
        ) : (
          <>{isLogin ? <Tasks /> : <Login />}</>
        )}
      </>
    </div>
  );
};

export default Home;
