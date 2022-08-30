module.exports = (task_tag) => {

  let newTask_tag = { 
    id: task_tag.id,
    taskId: task_tag.taskId,
    tagId: task_tag.tagId,
    isActive: task_tag.isActive,
    createdAt: task_tag.createdAt,
    updatedAt: task_tag.updatedAt,
    addedBy: task_tag.addedBy,
    updatedBy: task_tag.updatedBy,
    isDeleted: task_tag.isDeleted,
  };

  // remove undefined values
  if (newTask_tag.id){
    Object.keys(newTask_tag).forEach(key =>{
      if (newTask_tag[key] === undefined) return newTask_tag[key] = null;
    });
  } else {
    Object.keys(newTask_tag).forEach(key => newTask_tag[key] === undefined && delete newTask_tag[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newTask_tag) => {
   *   if (!newTask_tag.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newTask_tag) 
   */
  return Object.freeze(newTask_tag);
};
