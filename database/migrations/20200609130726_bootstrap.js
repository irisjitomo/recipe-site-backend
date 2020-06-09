
exports.up = function(knex) {
  return knex.schema
  .createTable('users', table => {
      table.increments();
      table.string('username', 255).notNullable().unique();
      table.string('password', 255).notNullable();
  })
  .createTable('saved_recipes', table => {
      table.increments();
      table.string('recipe_name', 255).notNullable()
      table.integer('recipe_id')
      table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('saved_recipes')
  .dropTableIfExists('users')
};
