import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  function addUser(username) {
    localStorage.setItem("username", username);
  }
  function checkIfLogin() {
    const usernameExist = localStorage.getItem("username");
    if (usernameExist) {
      setAuthLoading(false);
      return setCurrentUser(usernameExist);
    } else {
      setAuthLoading(false);
      return setCurrentUser(null);
    }
  }
  
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
