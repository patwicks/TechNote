import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Login from "../forms/Login";
import Tasks from "../task/Tasks";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="h-screen w-screen md:container ">
      {currentUser ? <Tasks /> : <Login />}
    </div>
  );
};

export default Home;
