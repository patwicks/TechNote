import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const AddTaskForm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col pt-20">
      <div className="w-full px-2">
        <MdOutlineArrowBackIosNew
          className="smooth-transistion cursor-pointer text-2xl hover:text-primary"
          onClick={() => navigate("/")}
        />
      </div>
      <h1 className="text-center text-xl font-semibold uppercase text-secondary-500">
        Add a new task
      </h1>
    </div>
  );
};

export default AddTaskForm;
