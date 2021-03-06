import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
//icon
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
//context
import { AuthContext } from "../../context/AuthContext";
//components
import SpinLoader from "../utilities/SpinLoader";
import { LoginValidation } from "./validation/LoginValidation";
//image
import loginWebp from "../../assets/images/img_todo_form.svg";

const Login = () => {
  //context
  const { serverError, handleLogin } = useContext(AuthContext);

  // state variables
  const [show, setShow] = useState(false);

  //formik form
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      handleLogin(values);
      actions.setSubmitting(false);
    }, 2000);
  };

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit,
  });

  return (
    <main className="center-content mt-20 min-w-[320px] md:columns-2 md:pt-10">
      <form
        className="w-full px-3 md:w-1/2"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {/* server error */}
        {serverError !== null ? (
          <p className="w-full rounded-sm bg-error-100 p-2 text-center text-sm text-error-200 lg:w-[30rem]">
            {serverError}
          </p>
        ) : null}
        <div className="mb-10">
          <p className="text-3xl font-bold text-secondary-600 dark:text-secondary-100">
            Let us make your tasks{" "}
            <span
              className="text-primary
          "
            >
              Organized!
            </span>
          </p>
          <p className="mt-2 text-sm text-secondary-500 dark:text-secondary-400">
            Enter your account details or informations.
          </p>
        </div>
        <div className="mb-7 w-full lg:w-[30rem]">
          <label
            className="text-secondary-500 dark:text-secondary-400"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="form-input"
            type="text"
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* error */}
          {errors.username && touched.username && (
            <p className="p-1 text-sm text-error-200">{errors.username}</p>
          )}
        </div>

        <div className="relative mb-7 w-full lg:w-[30rem]">
          <label
            className="text-secondary-500 dark:text-secondary-400"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="form-input"
            type={show ? "text" : "password"}
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {!show ? (
            <BsFillEyeFill
              className="absolute right-2 top-9 cursor-pointer text-xl text-secondary-400 hover:opacity-80"
              onClick={() => setShow(!show)}
            />
          ) : (
            <BsFillEyeSlashFill
              className="absolute right-2 top-9 cursor-pointer text-xl text-secondary-400 hover:opacity-80"
              onClick={() => setShow(!show)}
            />
          )}

          {/* error */}
          {errors.password && touched.password && (
            <p className="p-1 text-sm text-error-200">{errors.password}</p>
          )}
        </div>
        <button disabled={isSubmitting} className="form-btn" type="submit">
          {isSubmitting ? <SpinLoader /> : <p>Sign in</p>}
        </button>
        <p className="mt-5 text-sm dark:text-secondary-400">
          Don't have an Account?{" "}
          <span className="text-primary hover:underline">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </form>

      <div className="center-content hidden w-full overflow-hidden md:block md:w-1/2">
        <img
          className="object-cover object-center"
          src={loginWebp}
          alt="Notes"
        />
      </div>
    </main>
  );
};
export default Login;
