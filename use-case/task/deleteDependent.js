const response = require('../../utils/response');

const getDependencyCount = ({
  taskDb,task_tagDb
})=> async (filter) =>{
  let task = await taskDb.findAll(filter);
  if (task.length){
    let taskIds = task.map((obj) => obj.id);

    const taskFilter = { '$or': [{ parentId : { '$in' : taskIds } }] };
    const taskCnt =  await taskDb.count(taskFilter);

    const task_tagFilter = { '$or': [{ taskId : { '$in' : taskIds } }] };
    const task_tagCnt =  await task_tagDb.count(task_tagFilter);
    let result = {
      task :taskCnt + 1,
      task_tag :task_tagCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  task : 0 }
    });
  }
};

const deleteWithDependency = ({
  taskDb,task_tagDb
})=> async (filter) =>{
  let task = await taskDb.findAll(filter);
  if (task.length){
    let taskIds = task.map((obj) => obj.id);

    const taskFilter = { '$or': [{ parentId : { '$in' : taskIds } }] };
    const taskCnt =  (await taskDb.destroy(taskFilter)).length;

    const task_tagFilter = { '$or': [{ taskId : { '$in' : taskIds } }] };
    const task_tagCnt =  (await task_tagDb.destroy(task_tagFilter)).length;
    let deleted = (await taskDb.destroy(filter)).length;
    let result = {
      task :taskCnt + deleted,
      task_tag :task_tagCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  task : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  taskDb,task_tagDb
}) => async (filter,updateBody) =>{
  let task = await taskDb.findAll(filter);
  if (task.length){
    let taskIds = task.map((obj) => obj.id);

    const taskFilter = { '$or': [{ parentId : { '$in' : taskIds } }] };
    const taskCnt =  (await taskDb.update(taskFilter,updateBody)).length;

    const task_tagFilter = { '$or': [{ taskId : { '$in' : taskIds } }] };
    const task_tagCnt =  (await task_tagDb.update(task_tagFilter,updateBody)).length;
    let updated = (await taskDb.update(filter,updateBody)).length;
    let result = {
      task :taskCnt + updated,
      task_tag :task_tagCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  task : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
