
/**
 *addTag.js
 */

const  tagEntity = require('../../entities/tag');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : create new record of tag in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addTag = ({
  tagDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdTag  = tagEntity(dataToCreate);
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(tagDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'tagname' ],createdTag,'INSERT');
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  createdTag = await tagDb.createOne(createdTag );
  return response.success({ data:createdTag });
};
module.exports = addTag;