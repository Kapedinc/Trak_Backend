module.exports = (task) => {

  let newTask = { 
    id: task.id,
    name: task.name,
    description: task.description,
    status: task.status,
    priority: task.priority,
    parentId: task.parentId,
    categoryId: task.categoryId,
    isImportant: task.isImportant,
    isUrgent: task.isUrgent,
    isActive: task.isActive,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
    addedBy: task.addedBy,
    updatedBy: task.updatedBy,
    isDeleted: task.isDeleted,
  };

  // remove undefined values
  if (newTask.id){
    Object.keys(newTask).forEach(key =>{
      if (newTask[key] === undefined) return newTask[key] = null;
    });
  } else {
    Object.keys(newTask).forEach(key => newTask[key] === undefined && delete newTask[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newTask) => {
   *   if (!newTask.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newTask) 
   */
  return Object.freeze(newTask);
};
