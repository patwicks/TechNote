import React from "react";
//icons
import { MdAccountCircle } from "react-icons/md";
import { AccountDashboard } from "./AccountDashboard";
import { AccountForm } from "./AccountForm";

const Account = () => {
  return (
    <div className="mt-14 flex w-full flex-col">
      <div className="flex w-full items-center rounded-sm bg-secondary-300 px-2 py-3">
        <MdAccountCircle className="mr-2 text-2xl text-secondary-500" />
        <p className="text-sm text-secondary-500">Account details</p>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row">
        {/* account form */}
        <div className="w-full p-2 md:w-1/2">
          <AccountForm />
        </div>
        {/* account dashboard */}
        <div className="w-full p-2 md:w-1/2">
          <AccountDashboard />
        </div>
      </div>
    </div>
  );
};

export default Account;
