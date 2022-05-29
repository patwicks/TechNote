import React from "react";
//icons
import { MdAccountCircle } from "react-icons/md";
import { AccountDashboard } from "./AccountDashboard";

const Account = () => {
  return (
    <div className="mt-14 flex w-full flex-col min-w-[320px]">
      <div className="flex w-full items-center rounded-sm bg-secondary-200 px-2 py-3">
        <MdAccountCircle className="mr-2 text-2xl text-secondary-500" />
        <p className="text-sm text-secondary-500">Account details</p>
      </div>
      {/* content */}
      <div className="flex flex-col items-center justify-center md:flex-row">
        {/* account dashboard */}
        <div className="w-full p-2">
          <AccountDashboard />
        </div>
      </div>
    </div>
  );
};

export default Account;
