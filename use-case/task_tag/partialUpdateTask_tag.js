/**
 *partialUpdateTask_tag.js
 */

const  task_tagEntity = require('../../entities/task_tag');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Task_tag. {status, message, data}
 */
const partialUpdateTask_tag = ({ task_tagDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedTask_tag = await task_tagDb.update(query,dataToUpdate);
  if (!updatedTask_tag || updatedTask_tag.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTask_tag[0] });
};
module.exports = partialUpdateTask_tag;