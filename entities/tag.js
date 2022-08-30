module.exports = (tag) => {

  let newTag = { 
    id: tag.id,
    tagname: tag.tagname,
    isActive: tag.isActive,
    createdAt: tag.createdAt,
    updatedAt: tag.updatedAt,
    addedBy: tag.addedBy,
    updatedBy: tag.updatedBy,
    isDeleted: tag.isDeleted,
  };

  // remove undefined values
  if (newTag.id){
    Object.keys(newTag).forEach(key =>{
      if (newTag[key] === undefined) return newTag[key] = null;
    });
  } else {
    Object.keys(newTag).forEach(key => newTag[key] === undefined && delete newTag[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newTag) => {
   *   if (!newTag.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newTag) 
   */
  return Object.freeze(newTag);
};
