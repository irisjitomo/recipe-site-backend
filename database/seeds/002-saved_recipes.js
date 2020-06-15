
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('saved_recipes')
    .then(function () {
      // Inserts seed entries
      return knex('saved_recipes').insert([
        {id: 1, recipe_name: 'Garlicky Pasta with Swiss Chard and Beans', recipe_id: 482788, user_id: 1},
        {id: 2, recipe_name: 'Garlicky Pasta with Swiss Chard and Beans', recipe_id: 482788, user_id: 2},
        {id: 3, recipe_name: 'Salmon with Sesame-Ginger Quinoa', recipe_id: 755082, user_id: 1},
      ]);
    });
};
