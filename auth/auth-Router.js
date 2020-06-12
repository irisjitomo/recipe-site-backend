const router = require('express').Router()
const db = require('./auth-model')
const bcrypt = require('bcryptjs')
const secret = require('./secretForToken')
const cors = require('cors');
const jwt = require('jsonwebtoken')


router.post('/register', (req, res) => {
    let newUser = req.body
    const hash = bcrypt.hashSync(newUser.password, 7)
    newUser.password = hash

    db.add(newUser)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(() => {
        res.status(500).json({message : 'could not complete request', error: error})
    })
})

router.post('/login', (req, res) => {
    let {username, password} = req.body
    db.findBy({username})
    .first()
    .then(login => {
        if (login && bcrypt.compareSync(password, login.password)) {
            const token = Token(login)

            res.status(200).json({
                message: `Hello ${login.username}`,
                token,
                username: login.username
            })
        } else {
            res.status(401).json({ error: `Could not log in ${login.username}`})
        }
    })
    .catch(() => {
        res.status(500).json(err)
    })
})

const Token = (user) => {
    const payload = {
        username: user.username,
        password: user.password
    }
    const options = {
        expiresIn: '2 hours'
    }
    return jwt.sign(payload, secret.secret, options)
}


module.exports = router