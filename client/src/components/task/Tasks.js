import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { MdLibraryAdd } from "react-icons/md";
import TaskDetails from "./TaskDetails";
import { AuthContext } from "../../context/AuthContext";
const Tasks = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="h-screen w-full overflow-hidden px-2 pt-12">
      <div className="mt-2 flex h-12 w-full items-center justify-between bg-secondary-300 p-2">
        <div className="flex h-full items-center justify-around">
          <GiNotebook className="text-xl text-secondary-500" />
          <p className="ml-1 font-semibold text-secondary-500">Today's Tasks</p>
        </div>
        <div>
          <MdLibraryAdd
            className="smooth-transition mr-1 cursor-pointer text-xl hover:text-2xl hover:text-primary"
            onClick={() => {
              navigate("/addtask");
            }}
          />
        </div>
      </div>
      {/* task lsi container */}
      <div className="center-content flex h-[85vh] w-full flex-row flex-wrap gap-4 overflow-scroll bg-secondary-200 p-2 drop-shadow-xl">
        {currentUser.task.length !== 0 ? (
          <>
            {currentUser.task?.map((item) => (
              <TaskDetails key={item.id} />
            ))}
          </>
        ) : (
          <p className="mt-5 text-center text-secondary-500">
            Create tasks for today
          </p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
