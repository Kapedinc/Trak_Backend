/**
 *partialUpdateCategory.js
 */

const  categoryEntity = require('../../entities/category');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Category. {status, message, data}
 */
const partialUpdateCategory = ({ categoryDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedCategory = await categoryDb.update(query,dataToUpdate);
  if (!updatedCategory || updatedCategory.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCategory[0] });
};
module.exports = partialUpdateCategory;