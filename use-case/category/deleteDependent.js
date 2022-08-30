const response = require('../../utils/response');

const getDependencyCount = ({
  categoryDb,taskDb
})=> async (filter) =>{
  let category = await categoryDb.findAll(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const categoryFilter = { '$or': [{ parentId : { '$in' : categoryIds } }] };
    const categoryCnt =  await categoryDb.count(categoryFilter);

    const taskFilter = { '$or': [{ categoryId : { '$in' : categoryIds } }] };
    const taskCnt =  await taskDb.count(taskFilter);
    let result = {
      category :categoryCnt + 1,
      task :taskCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  category : 0 }
    });
  }
};

const deleteWithDependency = ({
  categoryDb,taskDb
})=> async (filter) =>{
  let category = await categoryDb.findAll(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const categoryFilter = { '$or': [{ parentId : { '$in' : categoryIds } }] };
    const categoryCnt =  (await categoryDb.destroy(categoryFilter)).length;

    const taskFilter = { '$or': [{ categoryId : { '$in' : categoryIds } }] };
    const taskCnt =  (await taskDb.destroy(taskFilter)).length;
    let deleted = (await categoryDb.destroy(filter)).length;
    let result = {
      category :categoryCnt + deleted,
      task :taskCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  category : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  categoryDb,taskDb
}) => async (filter,updateBody) =>{
  let category = await categoryDb.findAll(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const categoryFilter = { '$or': [{ parentId : { '$in' : categoryIds } }] };
    const categoryCnt =  (await categoryDb.update(categoryFilter,updateBody)).length;

    const taskFilter = { '$or': [{ categoryId : { '$in' : categoryIds } }] };
    const taskCnt =  (await taskDb.update(taskFilter,updateBody)).length;
    let updated = (await categoryDb.update(filter,updateBody)).length;
    let result = {
      category :categoryCnt + updated,
      task :taskCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  category : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
