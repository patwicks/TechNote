import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Login from "../forms/Login";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <div className="center-content h-screen w-screen md:container">
          <p>Home</p>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
