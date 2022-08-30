const response = require('../../utils/response');

const getDependencyCount = ({
  tagDb,task_tagDb
})=> async (filter) =>{
  let tag = await tagDb.findAll(filter);
  if (tag.length){
    let tagIds = tag.map((obj) => obj.id);

    const task_tagFilter = { '$or': [{ tagId : { '$in' : tagIds } }] };
    const task_tagCnt =  await task_tagDb.count(task_tagFilter);
    let result = { task_tag :task_tagCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  tag : 0 }
    });
  }
};

const deleteWithDependency = ({
  tagDb,task_tagDb
})=> async (filter) =>{
  let tag = await tagDb.findAll(filter);
  if (tag.length){
    let tagIds = tag.map((obj) => obj.id);

    const task_tagFilter = { '$or': [{ tagId : { '$in' : tagIds } }] };
    const task_tagCnt =  (await task_tagDb.destroy(task_tagFilter)).length;
    let deleted = (await tagDb.destroy(filter)).length;
    let result = { task_tag :task_tagCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  tag : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  tagDb,task_tagDb
}) => async (filter,updateBody) =>{
  let tag = await tagDb.findAll(filter);
  if (tag.length){
    let tagIds = tag.map((obj) => obj.id);

    const task_tagFilter = { '$or': [{ tagId : { '$in' : tagIds } }] };
    const task_tagCnt =  (await task_tagDb.update(task_tagFilter,updateBody)).length;
    let updated = (await tagDb.update(filter,updateBody)).length;
    let result = { task_tag :task_tagCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  tag : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
