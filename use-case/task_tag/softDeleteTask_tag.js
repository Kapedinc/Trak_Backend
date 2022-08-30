/**
 *softDeleteTask_tag.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Task_tag. {status, message, data}
 */
const softDeleteTask_tag = ({ task_tagDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedTask_tag = await task_tagDb.update(query, dataToUpdate);
  if (!updatedTask_tag || updatedTask_tag.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTask_tag[0] });
};
module.exports = softDeleteTask_tag;
