import React from "react";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TaskDetails = ({ task }) => {
  const navigate = useNavigate();
  // const createdAt = moment(task?.createdAt).startOf('day').fromNow();
  const createdAt = moment(task?.createdAt).calendar();
  return (
    <div className="p2 relative w-full overflow-x-scroll rounded-md bg-primarylight p-4  md:h-[15rem] md:w-[20rem]">
      <div className="absolute left-0 right-0 top-0 flex h-8 w-full items-center justify-between rounded-t-md bg-primary p-1">
        <div className="ml-2 flex items-center">
          <BsFillCheckCircleFill className="smooth-transition mr-2 cursor-pointer text-lg text-secondary-300 hover:text-secondary-600" />
          <FaEdit
            className="smooth-transition mr-2 cursor-pointer text-lg text-secondary-300 hover:text-secondary-600"
            onClick={() => navigate(`/taskedit/${task?._id}`)}
          />
          <MdDelete className="smooth-transition cursor-pointer text-lg text-secondary-300 hover:text-secondary-600" />
        </div>
        <p className=" text-right text-[0.7rem] text-secondary-100">
          {createdAt}
        </p>
      </div>

      <div className="mt-8 w-full">
        <p className="indent-2 text-sm">{task.text}</p>
      </div>
    </div>
  );
};

export default TaskDetails;
