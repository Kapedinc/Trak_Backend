/**
 *updateTag.js
 */

const  tagEntity = require('../../entities/tag');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Tag. {status, message, data}
 */
const updateTag = ({
  tagDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedTag = tagEntity(dataToUpdate);
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(tagDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'tagname' ],updatedTag,'UPDATE',query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  updatedTag = await tagDb.update(query,updatedTag);
  if (!updatedTag || updatedTag.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTag[0] });
};
module.exports = updateTag;