import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../api/Api";
import { AuthContext } from "./AuthContext";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    const fetchAllTask = async () => {
      const res = await API.get(`/task/populate/all/${currentUser?._id}`);
      if (res) {
        setTasks(res.data);
      }
    };
    if (currentUser) {
      fetchAllTask();
    }
    return () => {
      console.log("Tasks fecthed!");
    };
  }, [currentUser]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
