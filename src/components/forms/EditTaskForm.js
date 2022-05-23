import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
//icons
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const EditTaskForm = () => {
  const navigate = useNavigate();
  //task validation using yup
  const taskValidation = new Yup.object().shape({
    note: Yup.string()
      .min(5, "Your note is too short!")
      .required("Note is required!"),
  });
  //handlesubmit
  const onSubmit = (values, actions) => {
    console.log(values);
  };
  //formik
  const { errors, touched, handleSubmit, handleBlur, handleChange, values } =
    useFormik({
      initialValues: {
        note: "",
      },
      validationSchema: taskValidation,
      onSubmit,
    });
  return (
    <div className="flex h-screen w-screen flex-col px-4 pt-20">
      <div className="flex w-full items-center">
        <MdOutlineArrowBackIosNew
          className="smooth-transistion cursor-pointer text-xl hover:text-primary"
          onClick={() => navigate("/")}
        />
        <p className="ml-1 text-secondary-500">Back</p>
      </div>
      <h1 className="my-5 text-center text-lg uppercase text-secondary-500">
        Edit your Task
      </h1>
      <form
        className="center-content mx-auto w-full flex-col md:w-[30rem]"
        onSubmit={handleSubmit}
      >
        {/* error */}
        {errors.note && touched.note && (
          <p className="w-full rounded-sm bg-error-100 p-2 text-center text-error-200">
            error
          </p>
        )}
        <textarea
          className="my-5 h-60 w-full resize-none rounded-sm bg-secondary-300 p-3 indent-5 outline-1 outline-primary drop-shadow-lg md:w-[30rem]"
          name="note"
          id="note"
          value={values.note}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button className="form-btn" type="submit">
          Update task
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
