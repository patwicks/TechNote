import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const navigate = useNavigate();
  let id = 1;
  return (
    <div className="p2 relative w-full overflow-x-scroll rounded-md bg-primarylight p-4  md:h-[15rem] md:w-[20rem]">
      <div className="absolute left-0 right-0 top-0 flex h-8 w-full items-center justify-between rounded-t-md bg-primary p-1">
        <div className="ml-2 flex items-center">
          <BsFillCheckCircleFill className="smooth-transition mr-2 cursor-pointer text-lg text-secondary-300 hover:text-secondary-600" />
          <FaEdit
            className="smooth-transition mr-2 cursor-pointer text-lg text-secondary-300 hover:text-secondary-600"
            onClick={() => navigate(`/taskedit/${id}`)}
          />
          <MdDelete className="smooth-transition cursor-pointer text-lg text-secondary-300 hover:text-secondary-600" />
        </div>
        <p className=" text-right text-[0.7rem] text-secondary-100">
          May 02, 2022
        </p>
      </div>

      <div className="mt-8 w-full">
        <p className="indent-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic
          itaque totam alias magni, adipisci possimus commodi perspiciatis! Est
          quaerat quisquam quasi, eos error ipsam similique repellat iure quam
          eligendi?
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
