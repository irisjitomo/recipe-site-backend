const db = require('../database/dbConfig')

module.exports = {
    getRecipesAll,
    getSavedRecipes,
    addRecipe,
    remove
}

function getRecipesAll() {
    return db('saved_recipes')
}

function getSavedRecipes(id) {
    return db('saved_recipes as sr')
    .where('sr.user_id', id)
}

function addRecipe(recipe) {
    return db('saved_recipes as sr')
    .insert(recipe, 'id')
}

function remove(id) {
    return db('saved_recipes as sr')
    .where('id', id)
    .del()
}