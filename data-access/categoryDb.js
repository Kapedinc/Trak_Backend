let Category = require('../db/sequelize/models').category;
let {
  create,
  createOne,
  createMany,
  update,
  destroy,
  findOne,
  paginate,
  findAll,
  count,
  upsert,
} = require('../db/sequelize/dbService')(Category);

module.exports = {
  createOne,
  createMany,
  update,
  destroy,
  findOne,
  paginate,
  findAll,
  count,
  upsert,  
};