import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../api/Api";
import { AuthContext } from "./AuthContext";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [finishedTasks, setFinishTasks] = useState(null);
  const [unfinishedTasks, setUnfinishTasks] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [serverSuccess, setServerSuccess] = useState(null);

  //handle create task
  const handleCreateTask = async (data) => {
    try {
      const res = await API.patch(`/task/create/${currentUser?._id}`, data);
      if (res) {
        setServerSuccess(res.data.successMessage);
        publicTaskFetch();
      }
    } catch (error) {
      console.log(error.response.data);
      setServerError(error.response.data.errorMessage);
    }
  };
  //handle delete task
  const handleDeleteTask = async (taskId) => {
    try {
      const res = await API.delete(
        `/task/delete/${currentUser?._id}/${taskId}`
      );
      if (res) {
        setServerSuccess(res.data.successMessage);
        publicTaskFetch();
      }
    } catch (error) {
      setServerError(error.response.data.errorMessage);
    }
  };
  //handle update task
  const handleUpdateTask = async (taskId, data) => {
    try {
      const res = await API.patch(`/task/update/${taskId}`, data);
      if (res) {
        setServerSuccess(res.data.successMessage);
        publicTaskFetch();
      }
    } catch (error) {
      setServerError(error.response.data.errorMessage);
    }
  };
  //handleupdate task
  const publicTaskFetch = async () => {
    try {
      const res = await API.get(`/task/populate/all/${currentUser?._id}`);
      if (res) {
        setUnfinishTasks(res.data.unfinished);
        setFinishTasks(res.data.finished);
      }
    } catch (error) {
      setServerError(error.response.data.errorMessage);
    }
  };
  useEffect(() => {
    const fetchAllTask = async () => {
      try {
        const res = await API.get(`/task/populate/all/${currentUser?._id}`);
        if (res) {
          setUnfinishTasks(res.data.unfinished);
          setFinishTasks(res.data.finished);
        }
      } catch (error) {
        setServerError(error.response.data.errorMessage);
      }
    };
    if (currentUser) {
      fetchAllTask();
    }
    return;
  }, [currentUser]);
  return (
    <TaskContext.Provider
      value={{
        finishedTasks,
        unfinishedTasks,
        publicTaskFetch,
        handleCreateTask,
        handleDeleteTask,
        serverError,
        serverSuccess,
        setServerSuccess,
        setServerError,
        handleUpdateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
