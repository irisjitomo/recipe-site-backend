# recipe-site-backend
Backend for Recipe Cheqr


User DB:

Registration of a new user // POST
`https://recipe-cheqr-backend.herokuapp.com/api/auth/register`

Logging In a new user giving a token for authorization // POST
`https://recipe-cheqr-backend.herokuapp.com/api/auth/register`

__________________________________________________________________

Recipe DB:

Retrieving all saved recipes, regardless of user_id // GET 
`https://recipe-cheqr-backend.herokuapp.com/api/recipes/savedRecipes`

Retrieving all saved recipes of user (user_id) // GET
`https://recipe-cheqr-backend.herokuapp.com/api/recipes/savedRecipes/:id`

Adding new recipe, based on user (req.params.id) // POST
`https://recipe-cheqr-backend.herokuapp.com/api/recipes/savedRecipes/:id`

Deleting saved recipe, takes in id of saved recipe for :id // DELELTE
`https://recipe-cheqr-backend.herokuapp.com/api/recipes/savedRecipes/recipe/:id`