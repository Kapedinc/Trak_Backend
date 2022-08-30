const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Tag = sequelize.define('tag',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      unique:true
    },
    tagname:{
      type:DataTypes.STRING,
      unique:true,
      lowercase:false,
      primaryKey:false,
      allowNull:false
    },
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
        async function (tag,options){
          tag.isActive = true;
          tag.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (tag,options){
          if (tag !== undefined && tag.length) { 
            for (let index = 0; index < tag.length; index++) { 
        
              const element = tag[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Tag.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Tag);
  sequelizePaginate.paginate(Tag);
  return Tag;
}
module.exports = makeModel;