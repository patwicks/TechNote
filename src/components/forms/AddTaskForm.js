import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const AddTaskForm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col px-4 pt-20">
      <div className="w-full flex items-center">
        <MdOutlineArrowBackIosNew
          className="smooth-transistion cursor-pointer text-xl hover:text-primary"
          onClick={() => navigate("/")}
        />
        <p className="ml-1 text-secondary-500">Back</p>
      </div>
      <h1 className="text-center text-lg uppercase my-5 text-secondary-500">
        Add your new Task
      </h1>
      <form className="center-content mx-auto w-full flex-col md:w-[30rem]">
        <textarea
          className="w-full resize-none rounded-sm bg-secondary-300 outline-1 h-60 p-3 indent-5 outline-primary drop-shadow-lg md:w-[30rem]"
        />
        <button className="form-btn" type="submit">
          Add task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
