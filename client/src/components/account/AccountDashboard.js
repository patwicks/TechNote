import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { AuthContext } from "../../context/AuthContext";
//icons
import { MdDashboard } from "react-icons/md";
export const AccountDashboard = () => {
  const { finishedTasks, unfinishedTasks } = useContext(TaskContext);
  const { currentUser } = useContext(AuthContext);
  const numberOfFinished = finishedTasks?.length;
  const numberOfUnfinished = unfinishedTasks?.length;

  return (
    <main className="flex w-full flex-col items-center">
      {/* profile */}
      <div className="center-content w-full flex-col p-2">
        <div className="center-content h-20 w-20 overflow-hidden rounded-full">
          <img
            className="h-full w-full object-cover object-center"
            src={require("../../assets/images/default.png")}
            alt="Profile"
          />
        </div>
        <p className ="uppercase text-secondary-500 font-medium text-md mt-2">{currentUser?.username}</p>
      </div>
      <div className="dropshadow-lg my-5 flex w-full items-center rounded-sm bg-secondary-200 px-2 py-3">
        <MdDashboard className="mr-2 text-xl text-secondary-400" />
        <h2 className="text-sm uppercase text-secondary-400">
          Progress Dashbord
        </h2>
      </div>
      <div className="mb-10 flex w-full flex-wrap items-center justify-center gap-5 md:mb-0">
        {/* task done */}
        <div className="center-content w-full flex-col rounded-sm bg-success-200 p-2 md:w-[16rem]">
          <h1 className="py-5 text-center text-4xl font-bold text-secondary-100">
            {numberOfFinished}
          </h1>
          <p className="text-sm text-secondary-200">
            Total number of finished task
          </p>
        </div>
        {/* Un finished task */}
        <div className="center-content w-full flex-col rounded-sm bg-error-200 p-2 md:w-[16rem]">
          <h1 className="py-5 text-center text-4xl font-bold text-secondary-100">
            {numberOfUnfinished}
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
