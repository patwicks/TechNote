import React, { useState, createContext, useEffect } from "react";
// API
import API from "../api/Api";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isLogin, setIsLogin] = useState();
  const [serverError, setServerError] = useState(null);
  const [serverErrorReg, setServerErrorReg] = useState(null);
  const [serverSuccess, setServerSuccess] = useState(null);

  const addUser = async (data) => {
    try {
      const res = await API.post("/user/register", data);
      if (res.data) {
        setServerSuccess(res.data.successMessage);
      }
    } catch (error) {
      setServerErrorReg(error.response.data.errorMessage);
    }
  };
  const checkIfLogin = async () => {
    try {
      const res = await API.get("/user/login/auto", { withCredentials: true });
      if (res.data) {
        setAuthLoading(false);
        setIsLogin(res.data.isLogin);
        setCurrentUser(res.data.user);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleLogin = async (data) => {
    try {
      const res = await API.post("/user/login", data, {
        withCredentials: true,
      });
      if (res.data) {
        setCurrentUser(res.data.user);
        window.location.reload(false);
      }
    } catch (error) {
      setServerError(error.response.data.errorMessage);
    }
  };
  const handleLogout = async () => {
    try {
      const res = await API.delete("/user/logout", { withCredentials: true });
      setAuthLoading(true);
      if (res.data) {
        setTimeout(() => {
          setAuthLoading(false);
          checkIfLogin();
        }, 3000);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    checkIfLogin();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        checkIfLogin,
        currentUser,
        setCurrentUser,
        addUser,
        authLoading,
        handleLogout,
        handleLogin,
        isLogin,
        serverError,
        serverErrorReg,
        serverSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
