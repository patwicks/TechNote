import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex w-full items-center justify-between border-b-[0.1rem] border-secondary-300  bg-secondary-100 p-2 md:container md:mx-auto">
      <p className="text-2xl font-bold text-secondary-600">
        Tech
        <span className="text-primary">note</span>
      </p>
      {currentUser && <p className="font-semibold">{currentUser}</p>}
    </div>
  );
};

export default Header;
