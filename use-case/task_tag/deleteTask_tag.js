
/**
 *deleteTask_tag.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Task_tag. {status, message, data}
 */
const deleteTask_tag = ({ task_tagDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedTask_tag = await task_tagDb.destroy(query);
  if (!deletedTask_tag || deletedTask_tag.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedTask_tag[0] });
};

module.exports = deleteTask_tag;
