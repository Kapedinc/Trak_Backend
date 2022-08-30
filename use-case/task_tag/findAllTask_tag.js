/**
 *findAllTask_tag.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Task_tag(s). {status, message, data}
 */
const findAllTask_tag = ({
  task_tagDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let totalRecords = await task_tagDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundTask_tag = await task_tagDb.paginate(query,options);
    if (!foundTask_tag){
      return response.recordNotFound();
    }
    return response.success({ data:foundTask_tag });
  }
};
module.exports = findAllTask_tag;