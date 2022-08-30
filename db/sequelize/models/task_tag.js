const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Task_tag = sequelize.define('task_tag',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    taskId:{ type:DataTypes.INTEGER },
    tagId:{ type:DataTypes.INTEGER },
    isActive:{ type:DataTypes.BOOLEAN },
    createdAt:{ type:DataTypes.DATE },
    updatedAt:{ type:DataTypes.DATE },
    addedBy:{ type:DataTypes.INTEGER },
    updatedBy:{ type:DataTypes.INTEGER },
    isDeleted:{ type:DataTypes.BOOLEAN }
  }
  ,{
    hooks:{
      beforeCreate: [
        async function (task_tag,options){
          task_tag.isActive = true;
          task_tag.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (task_tag,options){
          if (task_tag !== undefined && task_tag.length) { 
            for (let index = 0; index < task_tag.length; index++) { 
        
              const element = task_tag[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Task_tag.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Task_tag);
  sequelizePaginate.paginate(Task_tag);
  return Task_tag;
}
module.exports = makeModel;