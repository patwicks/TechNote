import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
//icons
import { MdOutlineArrowBackIosNew } from "react-icons/md";
//local
import { TaskContext } from "../../context/TaskContext";
import SpinLoader from "../utilities/SpinLoader";

const EditTaskForm = () => {
  const { taskId } = useParams();
  const { unfinishedTasks, handleUpdateTask } = useContext(TaskContext);
  const task = unfinishedTasks.filter((item) => {
    return item._id === taskId;
  });
  const { text, status } = task[0];

  const navigate = useNavigate();
  //task validation using yup
  const taskValidation = new Yup.object().shape({
    text: Yup.string()
      .min(5, "Your task content is too short!")
      .required("Task is required!"),
  });
  //handlesubmit
  const onSubmit = (values, actions) => {
    handleUpdateTask(taskId, values);
    setTimeout(() => {
      actions.resetForm();
      actions.setSubmitting(false);
      navigate("/");
    }, 2000);
  };
  //formik
  const {
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    isSubmitting,
  } = useFormik({
    initialValues: {
      text: text,
      status: status,
    },
    validationSchema: taskValidation,
    onSubmit,
  });
  return (
    <div className="flex h-screen w-screen flex-col px-4 pt-20">
      <div className="flex w-full items-center">
        <MdOutlineArrowBackIosNew
          className="smooth-transistion cursor-pointer text-xl hover:text-primary dark:text-secondary-100"
          onClick={() => navigate("/")}
        />
        <p className="ml-1 text-secondary-500 dark:text-secondary-400">Back</p>
      </div>
      <h1 className="my-5 text-center text-lg uppercase text-secondary-500 dark:text-secondary-400">
        Edit your Task
      </h1>
      <form
        className="center-content mx-auto w-full flex-col md:w-[30rem]"
        onSubmit={handleSubmit}
      >
        {/* error */}
        {errors.text && touched.text && (
          <p className="w-full rounded-sm bg-error-100 p-2 text-center text-error-200">
            {errors.text}
          </p>
        )}
        <textarea
          className="my-5 h-60 w-full resize-none rounded-sm bg-secondary-300 p-3 indent-5 outline-1 outline-primary drop-shadow-lg md:w-[30rem]"
          name="text"
          id="text"
          value={values.text}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button disabled={isSubmitting} className="form-btn" type="submit">
          {isSubmitting ? <SpinLoader /> : "Update task"}
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
