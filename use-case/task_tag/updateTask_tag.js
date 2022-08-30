/**
 *updateTask_tag.js
 */

const  task_tagEntity = require('../../entities/task_tag');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Task_tag. {status, message, data}
 */
const updateTask_tag = ({
  task_tagDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedTask_tag = task_tagEntity(dataToUpdate);
  updatedTask_tag = await task_tagDb.update(query,updatedTask_tag);
  if (!updatedTask_tag || updatedTask_tag.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTask_tag[0] });
};
module.exports = updateTask_tag;