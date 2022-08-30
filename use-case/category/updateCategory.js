/**
 *updateCategory.js
 */

const  categoryEntity = require('../../entities/category');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Category. {status, message, data}
 */
const updateCategory = ({
  categoryDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedCategory = categoryEntity(dataToUpdate);
  updatedCategory = await categoryDb.update(query,updatedCategory);
  if (!updatedCategory || updatedCategory.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCategory[0] });
};
module.exports = updateCategory;