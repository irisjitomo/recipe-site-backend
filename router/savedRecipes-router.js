const router = require('express').Router()

const db = require('./savedRecipes-model')

router.get('/savedRecipes', (req, res) => {
    db.getRecipesAll()
    .then(recipe => {
        res.json(recipe)
    })
    .catch(() => {
        res.status(500).json({message: 'could not complete request'})
    })
})

router.get('/savedRecipes/:id', (req,res) => {
    db.getSavedRecipes(req.params.id)
    .then(rec => {
        res.json(rec)
    })
    .catch(() => {
        res.status(500).json({message: 'could not complete request'})
    })
})

router.post('/savedRecipes/:id', (req,res) => {
    const recipe = {...req.body, user_id: req.params.id};
    db.addRecipe(recipe)
    .then(recipe => {
        res.status(201).json(recipe)
    })
    .catch(err => {
        res.status(500).json({ error: 'Could not add recipe'})
    })
})

router.delete('/savedRecipes/recipe/:id', (req,res) => {
    const {id} = req.params
    db.remove(id)
    .then(deleted => {
        if (deleted) {
            res.json({ removed: deleted})
        } else {
            res.status(404).json({ message: "could not find recipe with given ID"})
        }
    })
    .catch(() => {
        re.status(500).json({message: 'failed to delete recipe'})
    })
})




module.exports = router