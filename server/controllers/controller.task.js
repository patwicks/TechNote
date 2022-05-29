const Task = require("../models/model.task"); //Task model
const User = require("../models/model.user"); //User model
const { taskValidator } = require("../validators/validator.task"); //task validator

//Create new task
exports.CREATE_TASK = async (req, res) => {
  try {
    const { text, status } = req.body;
    const { userId } = req.params;
    const { error } = taskValidator(req.body);
    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      const newTask = new Task({
        text,
        status,
      });
      const { _id: id } = await newTask.save();
      if (id) {
        const addToTask = await User.findByIdAndUpdate(userId, {
          $push: { task: id },
        });
        if (addToTask) {
          return res
            .status(200)
            .json({ successMessage: "Task successfully created!" });
        } else {
          return res
            .status(400)
            .json({ errorMessage: "Failed to add new task!" });
        }
      } else {
        return res
          .status(400)
          .json({ errorMessage: "Something went wrong while creating task!" });
      }
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(400)
      .json({ errorMessage: "Something went wrong while creating new task!" });
  }
};
//EDIT a task
exports.EDIT_TASK = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { text, status } = req.body;
    const { error } = taskValidator(req.body);
    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      //update task
      const updateTask = await Task.findByIdAndUpdate(taskId, { text, status });
      if (updateTask) {
        return res
          .status(200)
          .json({ successMessage: "Task successfully updated!" });
      } else {
        return res.status(400).json({ errorMessage: "Failed to update task!" });
      }
    }
  } catch (error) {
    return res
      .status(400)
      .json({ errorMessage: "Something went wrong while editing task!" });
  }
};
//populate user task
exports.POPULATE_TASK = async (req, res) => {
  try {
    const { userId } = req.params;
    const unfinishedTask = await User.findById(userId).populate("task", null, {
      status: "unfinished",
    });
    const finishedTask = await User.findById(userId).populate("task", null, {
      status: "finished",
    });
    if (!unfinishedTask) {
      return res
        .status(400)
        .json({ errorMessage: "Failed to get tasks data!" });
    } else {
      return res
        .status(200)
        .json({ unfinished: unfinishedTask.task, finished: finishedTask.task});
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(400)
      .json({ errorMessage: "Something went wrong while fetching tasks!" });
  }
};
//delete a task
exports.DELETE_TASK = async (req, res) => {
  try {
    const { userId, taskId } = req.params;
    if (userId && taskId) {
      //delete a task from Task collection
      const delTask = await Task.findByIdAndDelete(taskId);
      const pullTaskInArray = await User.findByIdAndUpdate(userId, {
        $pull: { task: taskId },
      });
      if (delTask && pullTaskInArray) {
        return res
          .status(200)
          .json({ successMessage: "Task successfully deleted!" });
      } else {
        return res
          .status(400)
          .json({ errorMessage: "Failed to delete a task!" });
      }
    } else {
      return res.status(400).json({ errorMessage: "Failed to delete a task!" });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(400)
      .json({ errorMessage: "Something went wrong while deleting a task!" });
  }
};
