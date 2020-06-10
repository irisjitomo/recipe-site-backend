const router = require('express').Router()

const db = require('./savedRecipes-model')

router.get('/savedRecipes/:id', (req,res) => {
    db.getSavedRecipes(req.params.id)
    .then(rec => {
        res.json(rec)
    })
})

router.post('/savedRecipes', (req,res) => {
    db.addRecipe(req.body)
    .then(rec => {
        res.json(rec)
    })
})

module.exports = router