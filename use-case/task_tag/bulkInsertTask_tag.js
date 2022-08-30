
/**
 *bulkInsertTask_tag.js
 */

const  task_tagEntity = require('../../entities/task_tag');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Task_tags. {status, message, data}
 */
const bulkInsertTask_tag = ({
  task_tagDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let task_tagEntities = dataToCreate.map(item => task_tagEntity(item));
  let createdTask_tag = await task_tagDb.createMany(task_tagEntities);
  return response.success({ data:{ count: createdTask_tag.length } });
};
module.exports = bulkInsertTask_tag;