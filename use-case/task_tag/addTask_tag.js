
/**
 *addTask_tag.js
 */

const  task_tagEntity = require('../../entities/task_tag');
const response = require('../../utils/response');

/**
 * @description : create new record of task_tag in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addTask_tag = ({
  task_tagDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdTask_tag  = task_tagEntity(dataToCreate);
  createdTask_tag = await task_tagDb.createOne(createdTask_tag );
  return response.success({ data:createdTask_tag });
};
module.exports = addTask_tag;