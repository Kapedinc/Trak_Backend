const response = require('../../../../utils/response'); 
const responseHandler = require('../../../../utils/response/responseHandler'); 
const getSelectObject = require('../../../../utils/getSelectObject'); 

const addTask_tag = (addTask_tagUsecase) => async (req,res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    dataToCreate.addedBy = req.user.id;
    let result = await addTask_tagUsecase(dataToCreate,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const bulkInsertTask_tag = (bulkInsertTask_tagUsecase)=> async (req,res) => {
  try {
    let dataToCreate = req.body.data;
    for (let i = 0;i < dataToCreate.length;i++){
      dataToCreate[i] = {
        ...dataToCreate[i],
        addedBy:req.user.id,
      };
    }
    let result = await bulkInsertTask_tagUsecase(dataToCreate,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const findAllTask_tag = (findAllTask_tagUsecase) => async (req,res) => {
  try {
    let query = { ...req.body.query || {} };
    let options = { ...req.body.options || {} };
    let result = await findAllTask_tagUsecase({
      query,
      options,
      isCountOnly:req.body.isCountOnly || false
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const getTask_tag = (getTask_tagUsecase) => async (req,res) =>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest());
    }
    let options = {};
    let query = { id: req.params.id };
    let result = await getTask_tagUsecase({
      query,
      options
    },req,res);
    return responseHandler(res,result);
  } catch (error) {
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const getTask_tagCount = (getTask_tagCountUsecase) => async (req,res) => {
  try {
    let where = { ...req.body.where || {} };
    let result = await getTask_tagCountUsecase({ where },req,res);  
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const updateTask_tag = (updateTask_tagUsecase) => async (req,res) =>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let dataToUpdate = { ...req.body || {} };
    let query = { id: req.params.id };
    delete dataToUpdate.addedBy;
    delete dataToUpdate.updatedBy;
    dataToUpdate.updatedBy = req.user.id;
    let result = await updateTask_tagUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const bulkUpdateTask_tag = (bulkUpdateTask_tagUsecase) => async (req,res) => {
  try {
    let dataToUpdate = { ...req.body.data || {} };
    let query = { ...req.body.filter || {} };
    delete dataToUpdate.addedBy;
    delete dataToUpdate.updatedBy;
    dataToUpdate.updatedBy = req.user.id;
    let result = await bulkUpdateTask_tagUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const partialUpdateTask_tag = (partialUpdateTask_tagUsecase) => async (req,res) => {
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { id: req.params.id };
    let dataToUpdate = req.body;
    delete dataToUpdate.updatedBy;
    dataToUpdate.updatedBy = req.user.id;
    let result = await partialUpdateTask_tagUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const softDeleteTask_tag = (softDeleteTask_tagUsecase) => async (req,res)=>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { id: req.params.id };
    const dataToUpdate = {
      isDeleted: true,
      updatedBy: req.user.id,
    };
    let result = await softDeleteTask_tagUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const deleteTask_tag = (deleteTask_tagUsecase) => async (req,res) => {
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { id: req.params.id };
    let result = await deleteTask_tagUsecase({ query },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const deleteManyTask_tag = (deleteManyTask_tagUsecase) => async (req,res) => {
  try {
    if (!req.body || !req.body.ids){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! ids field is required.' }));
    }
    let ids = req.body.ids;
    let query = { id : { $in:ids } };
    let result = await deleteManyTask_tagUsecase(query,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const softDeleteManyTask_tag = (softDeleteManyTask_tagUsecase) => async (req,res) => {
  try {
    if (!req.body || !req.body.ids){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! ids field is required.' }));
    }
    let ids = req.body.ids;
    let query = { id : { $in:ids } };
    const dataToUpdate = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await softDeleteManyTask_tagUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

module.exports = {
  addTask_tag,
  bulkInsertTask_tag,
  findAllTask_tag,
  getTask_tag,
  getTask_tagCount,
  updateTask_tag,
  bulkUpdateTask_tag,
  partialUpdateTask_tag,
  softDeleteTask_tag,
  deleteTask_tag,
  deleteManyTask_tag,
  softDeleteManyTask_tag
};
