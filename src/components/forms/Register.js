import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { RegisterValidation } from "./validation/RegisterValidation";

const Register = () => {
  const [show, setShow] = useState(false);
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      try {
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };
  const { values, touched, handleBlur, handleSubmit, handleChange, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: RegisterValidation,
      onSubmit,
    });

  return (
    <main className="center-content mt-20 min-w-[320px]">
      <form
        className="md:center-content w-full flex-col px-3 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="mb-10 lg:w-[30rem]">
          <p className="text-3xl font-bold text-secondary-600 md:mt-10">
            Start in creating your{" "}
            <span className="text-primary">Account!</span>
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
            <p className="p-1 text-sm text-error">{errors.username}</p>
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
          {/* error */}
          {errors.password && touched.password && (
            <p className="p-1 text-sm text-error">{errors.password}</p>
          )}

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
        </div>
        <div className="mb-7 w-full lg:w-[30rem]">
          <label className="text-secondary-500" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            className="form-input"
            type={show ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* error */}
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="p-1 text-sm text-error">{errors.confirmPassword}</p>
          )}
        </div>
        <button className="form-btn" type="submit">
          Sign up
        </button>
        <p className="mt-5 text-sm">
          Already have an Account?{" "}
          <span className="text-primary hover:underline">
            <Link to="/">Sign in</Link>
          </span>
        </p>
      </form>
    </main>
  );
};

export default Register;
