const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,categoryDb,taskDb,tagDb,task_tagDb,userAuthSettingsDb,userTokensDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  await userDb.count(userFilter);

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  await categoryDb.count(categoryFilter);

    const taskFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const taskCnt =  await taskDb.count(taskFilter);

    const tagFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const tagCnt =  await tagDb.count(tagFilter);

    const task_tagFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const task_tagCnt =  await task_tagDb.count(task_tagFilter);

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  await userAuthSettingsDb.count(userAuthSettingsFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      user :userCnt + 1,
      category :categoryCnt ,
      task :taskCnt ,
      tag :tagCnt ,
      task_tag :task_tagCnt ,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,categoryDb,taskDb,tagDb,task_tagDb,userAuthSettingsDb,userTokensDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.destroy(userFilter)).length;

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  (await categoryDb.destroy(categoryFilter)).length;

    const taskFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const taskCnt =  (await taskDb.destroy(taskFilter)).length;

    const tagFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const tagCnt =  (await tagDb.destroy(tagFilter)).length;

    const task_tagFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const task_tagCnt =  (await task_tagDb.destroy(task_tagFilter)).length;

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  (await userAuthSettingsDb.destroy(userAuthSettingsFilter)).length;

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.destroy(userTokensFilter)).length;

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.destroy(userRoleFilter)).length;
    let deleted = (await userDb.destroy(filter)).length;
    let result = {
      user :userCnt + deleted,
      category :categoryCnt ,
      task :taskCnt ,
      tag :tagCnt ,
      task_tag :task_tagCnt ,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,categoryDb,taskDb,tagDb,task_tagDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.update(userFilter,updateBody)).length;

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  (await categoryDb.update(categoryFilter,updateBody)).length;

    const taskFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const taskCnt =  (await taskDb.update(taskFilter,updateBody)).length;

    const tagFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const tagCnt =  (await tagDb.update(tagFilter,updateBody)).length;

    const task_tagFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const task_tagCnt =  (await task_tagDb.update(task_tagFilter,updateBody)).length;

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  (await userAuthSettingsDb.update(userAuthSettingsFilter,updateBody)).length;

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.update(userTokensFilter,updateBody)).length;

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.update(userRoleFilter,updateBody)).length;
    let updated = (await userDb.update(filter,updateBody)).length;
    let result = {
      user :userCnt + updated,
      category :categoryCnt ,
      task :taskCnt ,
      tag :tagCnt ,
      task_tag :task_tagCnt ,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
