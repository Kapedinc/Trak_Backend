const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');
const convertObjectToEnum = require('../../utils/convertObjectToEnum');  
const taskConstantsDefault = require('../../constants/taskConstants');

const createSchema = joi.object({
  name: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  status: joi.valid(...convertObjectToEnum(taskConstantsDefault.STATUS)),
  priority: joi.number().integer().allow(0),
  parentId: joi.number().integer().allow(0),
  categoryId: joi.number().integer().allow(0),
  isImportant: joi.boolean(),
  isUrgent: joi.boolean(),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  name: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  status: joi.valid(...convertObjectToEnum(taskConstantsDefault.STATUS)),
  priority: joi.number().integer().allow(0),
  parentId: joi.number().integer().allow(0),
  categoryId: joi.number().integer().allow(0),
  isImportant: joi.boolean(),
  isUrgent: joi.boolean(),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    priority: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    parentId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    categoryId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    isImportant: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    isUrgent: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    id: joi.any()
  }).unknown(true),])),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};