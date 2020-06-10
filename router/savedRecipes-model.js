const db = require('../database/dbConfig')

module.exports = {
    getSavedRecipes,
    addRecipe
}

function getSavedRecipes(id) {
    return db('saved_recipes as sr')
    .where('sr.user_id', id)
}

function addRecipe(recipe) {
    return db('saved_recipes as sr')
    .insert(recipe, 'id')
}