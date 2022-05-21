import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { LoginValidation } from "./validation/LoginValidation";
const Login = () => {
  // state variables
  const [show, setShow] = useState(false);
  //formik form
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      try {
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: LoginValidation,
      onSubmit,
    });

  return (
    <main className="center-content mt-24 min-w-[320px] columns-2 flex-row">
      <form className="w-full px-3 md:w-1/2" onSubmit={handleSubmit}>
        <div className="mb-10">
          <p className="text-3xl font-bold text-secondary-600">
            Let us make your tasks{" "}
            <span
              className="text-primary
          "
            >
              Organized!
            </span>
          </p>
          <p className="mt-2 text-sm text-secondary-500">
            Enter your account details or informations.
          </p>
        </div>
        <div className="mb-7 w-full lg:w-[30rem]">
          <label className="text-secondary-500" htmlFor="username">
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
            <p className="p-1 text-sm text-error">Username is required!</p>
          )}
        </div>

        <div className="relative mb-7 w-full lg:w-[30rem]">
          <label className="text-secondary-500" htmlFor="password">
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
            <p className="p-1 text-sm text-error">Password is required!</p>
          )}
        </div>
        <button className="form-btn" type="submit">
          Sign in
        </button>
        <p className="mt-5 text-sm">
          Don't have an Account?{" "}
          <span className="text-primary hover:underline">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </form>

      <div className="center-content hidden w-full overflow-hidden md:block md:w-1/2">
        <img
          className="object-cover object-center"
          src={require("../../assets/images/img_todo_form.png")}
          alt="Notes"
        />
      </div>
    </main>
  );
};
export default Login;
