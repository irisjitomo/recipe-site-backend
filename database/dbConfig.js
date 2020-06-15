const dbEngine = process.env.DB || 'development'; 
// make sure to add DB as a key with the value 
// 'production' in heroku to access the DB
const config = require('../knexfile.js')[dbEngine];
const knex = require('knex');

module.exports = knex(config);
