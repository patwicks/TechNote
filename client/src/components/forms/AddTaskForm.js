import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
//icons
import { MdOutlineArrowBackIosNew } from "react-icons/md";
//local
import SpinLoader from "../utilities/SpinLoader";
import { TaskContext } from "../../context/TaskContext";

const AddTaskForm = () => {
  const navigate = useNavigate();
  const { handleCreateTask } = useContext(TaskContext);

  // yup validation
  const taskValidation = new Yup.object().shape({
    text: Yup.string()
      .min(5, "Your task content is too short!")
      .required("Task is required!"),
  });
  const onSubmit = (values, actions) => {
    // console.log(values);
    handleCreateTask(values);
    setTimeout(() => {
      actions.resetForm();
      actions.setSubmitting(false);
      navigate("/");
    }, 1000);
  };
  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      text: "",
      status: "unfinished",
    },
    validationSchema: taskValidation,
    onSubmit,
  });
  return (
    <div className="flex h-full w-full flex-col px-4 pt-20">
      <div className="flex w-full items-center">
        <MdOutlineArrowBackIosNew
          className="smooth-transistion cursor-pointer text-xl hover:text-primary"
          onClick={() => navigate("/")}
        />
        <p className="ml-1 text-secondary-500">Back</p>
      </div>
      <h1 className="my-5 text-center text-lg uppercase text-secondary-500">
        Add your new Task
      </h1>
      <form
        className="center-content mx-auto w-full flex-col md:w-[30rem]"
        onSubmit={handleSubmit}
      >
        {/* form error show */}
        {errors.text && touched.text && (
          <p className="w-full rounded-sm bg-error-100 p-2 text-center text-error-200">
            {errors.text}
          </p>
        )}
        <textarea
          className="my-5 h-60 w-full resize-none rounded-sm bg-secondary-300 p-3 indent-5 outline-1 outline-primary drop-shadow-lg md:w-[30rem]"
          id="text"
          name="text"
          value={values.text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button disabled={isSubmitting} className="form-btn" type="submit">
          {isSubmitting ? <SpinLoader /> : "Add task"}
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
