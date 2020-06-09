
exports.up = function(knex) {
  return knex.schema
  .createTable('users', table => {
      table.increments();
      table.string('username', 255).notNullable().unique();
      table.string('password', 255).notNullable();
  })
  .createTable('saved_recipes', table => {
      table.increments();
      // this needs a foreign key to point to user ID
  })

};

exports.down = function(knex) {
  
};
