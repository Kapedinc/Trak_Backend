
/**
 *bulkInsertTask.js
 */

const  taskEntity = require('../../entities/task');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Tasks. {status, message, data}
 */
const bulkInsertTask = ({
  taskDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let taskEntities = dataToCreate.map(item => taskEntity(item));
  let createdTask = await taskDb.createMany(taskEntities);
  return response.success({ data:{ count: createdTask.length } });
};
module.exports = bulkInsertTask;