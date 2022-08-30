/**
 *getTask_tagCount.js
 */

const response = require('../../utils/response');

/**
 * @description : returns total number of records of task_tag
 * @param {Object} params : request body including where conditions.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of count. {status, message, data}
 */
const getTask_tagCount = ({
  task_tagDb,filterValidation 
}) => async (params,req,res) => {
  let { where } = params;
  const validateRequest = await filterValidation(where);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let count = await task_tagDb.count(where);
  return response.success({ data:{ count } });
};
module.exports = getTask_tagCount;