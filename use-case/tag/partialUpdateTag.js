/**
 *partialUpdateTag.js
 */

const  tagEntity = require('../../entities/tag');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Tag. {status, message, data}
 */
const partialUpdateTag = ({ tagDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(TagDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'tagname' ],dataToUpdate,'UPDATE',query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const updatedTag = await tagDb.update(query,dataToUpdate);
  if (!updatedTag || updatedTag.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTag[0] });
};
module.exports = partialUpdateTag;