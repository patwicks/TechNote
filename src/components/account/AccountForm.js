import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// icons
import { FaUserEdit } from "react-icons/fa";
//local

export const AccountForm = () => {
  const [enable, setEnable] = useState(false);
  const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9].{6,}$/;
  //validation form
  const formValidation = Yup.object().shape({
    username: Yup.string()
      .min(5, "Username is too short!")
      .max(15, "Username is too long!")
      .required("Username is required!"),
    password: Yup.string()
      .min(6, "Password is too short!")
      .matches(
        passwordRules,
        "Password must contain atleast one numeric character!"
      )
      .required("Password is required!"),
  });
  const onSubmit = (values, actions) => {
    console.log(values);
  };
  const { values, touched, handleChange, handleBlur, handleSubmit, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: formValidation,
      onSubmit,
    });
  return (
    <div className="flex w-full flex-col">
      {/* error */}
      {/* <p className="w-full rounded-sm bg-error-100 py-2 text-center text-error-200">
        Error from server
      </p> */}
      <div className="center-content mt-5 h-16 w-16 self-center overflow-hidden rounded-full border-2 border-primarylight bg-primary">
        <img
          className="h-full w-full object-cover object-center"
          src={require("../../assets/images/default.png")}
          alt="Profile"
        />
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mt-5 w-full">
          <label
            className="text-sm uppercase text-secondary-500"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="form-input"
            type="text"
            id="username"
            name="username"
            disabled={enable}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.username && touched.username && (
          <p className="pt-1 text-[0.8rem] text-error-200">{errors.username}</p>
        )}
        <div className="mt-5 w-full">
          <label
            className="text-sm uppercase text-secondary-500"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            disabled={enable}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.password && touched.password && (
          <p className="pt-1 text-[0.8rem] text-error-200">{errors.password}</p>
        )}
        <div className="flex w-full items-center justify-end py-2">
          <FaUserEdit
            className="smooth-transition float-right text-xl text-secondary-400 hover:text-primary"
            onClick={() => setEnable(!enable)}
          />
        </div>
        {!enable ? (
          <div>
            <button
              className="smooth-transition mr-3 mt-2 w-28 rounded-sm bg-primary p-2 text-center text-sm uppercase text-secondary-100 outline-none hover:opacity-80"
              type="submit"
            >
              Submit Edit
            </button>
            <button
              className="smooth-transition w-28 rounded-sm bg-error-200 p-2 text-center text-sm uppercase text-secondary-100 outline-none hover:opacity-80"
              //   type="reset"
              onClick={() => setEnable(!enable)}
            >
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};
