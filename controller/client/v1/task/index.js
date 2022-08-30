const taskDb = require('../../../../data-access/taskDb');
const task_tagDb = require('../../../../data-access/task_tagDb');
const taskSchema = require('../../../../validation/schema/task');
const createValidation = require('../../../../validation')(taskSchema.createSchema);
const updateValidation = require('../../../../validation')(taskSchema.updateSchema);
const filterValidation = require('../../../../validation')(taskSchema.filterValidationSchema);
const taskController = require('./task');

// use-cases imports with dependency injection
const addTaskUsecase = require('../../../../use-case/task/addTask')({
  taskDb,
  createValidation 
});
const findAllTaskUsecase = require('../../../../use-case/task/findAllTask')({
  taskDb,
  filterValidation
});
const getTaskCountUsecase = require('../../../../use-case/task/getTaskCount')({
  taskDb,
  filterValidation
});
const softDeleteManyTaskUsecase = require('../../../../use-case/task/softDeleteManyTask')({
  taskDb,
  task_tagDb
});
const bulkInsertTaskUsecase = require('../../../../use-case/task/bulkInsertTask')({ taskDb });
const bulkUpdateTaskUsecase = require('../../../../use-case/task/bulkUpdateTask')({ taskDb });
const deleteManyTaskUsecase = require('../../../../use-case/task/deleteManyTask')({
  taskDb,
  task_tagDb
});
const softDeleteTaskUsecase = require('../../../../use-case/task/softDeleteTask')({
  taskDb,
  task_tagDb
});
const partialUpdateTaskUsecase = require('../../../../use-case/task/partialUpdateTask')({
  taskDb,
  updateValidation
});
const updateTaskUsecase = require('../../../../use-case/task/updateTask')({
  taskDb,
  updateValidation 
});
const getTaskUsecase = require('../../../../use-case/task/getTask')({
  taskDb,
  filterValidation
});
const deleteTaskUsecase = require('../../../../use-case/task/deleteTask')({
  taskDb,
  task_tagDb
});

// controller methods mapping
const addTask = taskController.addTask(addTaskUsecase);
const findAllTask = taskController.findAllTask(findAllTaskUsecase);
const getTaskCount = taskController.getTaskCount(getTaskCountUsecase);
const softDeleteManyTask = taskController.softDeleteManyTask(softDeleteManyTaskUsecase);
const bulkInsertTask = taskController.bulkInsertTask(bulkInsertTaskUsecase);
const bulkUpdateTask = taskController.bulkUpdateTask(bulkUpdateTaskUsecase);
const deleteManyTask = taskController.deleteManyTask(deleteManyTaskUsecase);
const softDeleteTask = taskController.softDeleteTask(softDeleteTaskUsecase);
const partialUpdateTask = taskController.partialUpdateTask(partialUpdateTaskUsecase);
const updateTask = taskController.updateTask(updateTaskUsecase);
const getTaskById = taskController.getTask(getTaskUsecase);
const deleteTask = taskController.deleteTask(deleteTaskUsecase);

module.exports = {
  addTask,
  findAllTask,
  getTaskCount,
  softDeleteManyTask,
  bulkInsertTask,
  bulkUpdateTask,
  deleteManyTask,
  softDeleteTask,
  partialUpdateTask,
  updateTask,
  getTaskById,
  deleteTask,
};