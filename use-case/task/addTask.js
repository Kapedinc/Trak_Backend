
/**
 *addTask.js
 */

const  taskEntity = require('../../entities/task');
const response = require('../../utils/response');

/**
 * @description : create new record of task in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addTask = ({
  taskDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdTask  = taskEntity(dataToCreate);
  createdTask = await taskDb.createOne(createdTask );
  return response.success({ data:createdTask });
};
module.exports = addTask;