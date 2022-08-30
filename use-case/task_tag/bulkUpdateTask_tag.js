/**
 *bulkUpdateTask_tag.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of task_tag with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateTask_tag = ({ task_tagDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedTask_tag = (await task_tagDb.update(query,dataToUpdate)).length;
  return response.success({ data:{ count: updatedTask_tag } });
};
module.exports = bulkUpdateTask_tag;