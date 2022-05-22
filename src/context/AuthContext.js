import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  function addUser(username) {
    localStorage.setItem("username", username);
  }
  function checkIfLogin() {
    const usernameExist = localStorage.getItem("username");
    if (usernameExist) {
      return setCurrentUser(usernameExist);
    } else {
      return setCurrentUser(null);
    }
  }

  useEffect(() => {
    checkIfLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ checkIfLogin, currentUser, setCurrentUser, addUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
