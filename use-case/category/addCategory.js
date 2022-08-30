
/**
 *addCategory.js
 */

const  categoryEntity = require('../../entities/category');
const response = require('../../utils/response');

/**
 * @description : create new record of category in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCategory = ({
  categoryDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdCategory  = categoryEntity(dataToCreate);
  createdCategory = await categoryDb.createOne(createdCategory );
  return response.success({ data:createdCategory });
};
module.exports = addCategory;