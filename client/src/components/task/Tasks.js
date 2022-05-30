import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { MdLibraryAdd } from "react-icons/md";
import TaskDetails from "./TaskDetails";

import { TaskContext } from "../../context/TaskContext"; //context for task
const Tasks = () => {
  const navigate = useNavigate();
  const {
    unfinishedTasks,
    serverError,
    serverSuccess,
    setServerSuccess,
    setServerError,
  } = useContext(TaskContext);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setShow(false);
      setServerSuccess(null);
      setServerError(null);
    }, [4000]);

    return () => {
      clearTimeout(time);
    };
  }, [setServerSuccess, setServerError]);

  return (
    <div className="h-full w-full overflow-hidden px-2 pt-12">
      <div className="mt-2 flex h-12 w-full items-center justify-between bg-secondary-300 p-2">
        <div className="flex h-full items-center justify-around">
          <GiNotebook className="text-xl text-secondary-500" />
          <p className="ml-1 font-semibold text-secondary-500">Today's Tasks</p>
        </div>
        <div>
          <MdLibraryAdd
            className="smooth-transition mr-1 cursor-pointer text-xl hover:text-2xl hover:text-primary"
            onClick={() => {
              navigate("/task/create");
            }}
          />
        </div>
      </div>

      {serverSuccess && show ? (
        <p className="mt-1 w-full bg-success-100 p-2 text-center text-sm text-success-200">
          {serverSuccess}
        </p>
      ) : null}
      {serverError && show ? (
        <p className="mt-1 w-full bg-error-100 p-2 text-center text-sm text-error-200">
          {serverError}
        </p>
      ) : null}

      {/* task list container */}
      <div className="flex justify-center h-[85vh] w-full flex-row flex-wrap gap-8 md:gap-5 overflow-scroll bg-secondary-200 p-2 drop-shadow-xl">
        {unfinishedTasks?.length !== 0 ? (
          <>
            {unfinishedTasks?.map((item) => (
              <TaskDetails key={item._id} task={item} />
            ))}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="mt-5 text-center text-secondary-500">
              Create tasks for today
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
