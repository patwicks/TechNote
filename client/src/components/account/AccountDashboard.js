import React from "react";
//icons
import { MdDashboard } from "react-icons/md";
export const AccountDashboard = () => {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="dropshadow-lg my-5 flex w-full items-center rounded-sm bg-primary px-2 py-3">
        <MdDashboard className="mr-2 text-xl text-secondary-400" />
        <h2 className="text-sm uppercase text-secondary-200">
          Progress Dashbord
        </h2>
      </div>
      <div className="mb-10 flex w-full flex-wrap items-center justify-center gap-5 md:mb-0">
        {/* task done */}
        <div className="center-content w-full flex-col rounded-sm bg-success-200 p-2 md:w-[16rem]">
          <h1 className="py-5 text-center text-4xl font-bold text-secondary-100">
            68
          </h1>
          <p className="text-sm text-secondary-200">
            Total number of finished task
          </p>
        </div>
        {/* Un finished task */}
        <div className="center-content w-full flex-col rounded-sm bg-error-200 p-2 md:w-[16rem]">
          <h1 className="py-5 text-center text-4xl font-bold text-secondary-100">
            23
          </h1>
          <p className="text-sm text-secondary-200">
            Total number of unfinished task
          </p>
        </div>
        {/* end */}
      </div>
    </main>
  );
};
