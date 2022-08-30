module.exports = (category) => {

  let newCategory = { 
    id: category.id,
    name: category.name,
    parentId: category.parentId,
    description: category.description,
    isActive: category.isActive,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
    addedBy: category.addedBy,
    updatedBy: category.updatedBy,
    isDeleted: category.isDeleted,
  };

  // remove undefined values
  if (newCategory.id){
    Object.keys(newCategory).forEach(key =>{
      if (newCategory[key] === undefined) return newCategory[key] = null;
    });
  } else {
    Object.keys(newCategory).forEach(key => newCategory[key] === undefined && delete newCategory[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newCategory) => {
   *   if (!newCategory.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newCategory) 
   */
  return Object.freeze(newCategory);
};
