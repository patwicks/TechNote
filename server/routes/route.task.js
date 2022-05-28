const router = require("express").Router();
const {
  CREATE_TASK,
  EDIT_TASK,
  POPULATE_TASK,
  DELETE_TASK,
} = require("../controllers/controller.task");

router.patch("/create/:userId", CREATE_TASK); //adding the task on array object of user task
router.patch("/update/:taskId", EDIT_TASK); //editing task text and status
router.get("/populate/all/:userId", POPULATE_TASK); //get all the task by user
router.delete("/delete/:userId/:taskId", DELETE_TASK); //delete task and update the array task on User

module.exports = router;
