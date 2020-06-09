
exports.up = function(knex) {
  return knex.schema
  .createTable('users', table => {
      table.increments();
      table.string('username', 255).notNullable().unique();
      table.string('password', 255).notNullable();
  })
  .createTable('saved_recipes', table => {
      // table.primary(id, [recipe_id])
      // // this needs a foreign key to point to user ID
      // table.string('title', 255).notNullable()
      // table.integer('readyInMinutes').notNullable()
      // table.integer('servings').notNullable()
      // table.string('sourceURL', 255).notNullable()
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
  .createTable('join', table => {
      table.increments();
      table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('saved_recipes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('join')
  .dropTableIfExists('saved_recipes')
  .dropTableIfExists('users')
};
