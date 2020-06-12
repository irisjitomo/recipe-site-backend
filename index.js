const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

var corsOptions = {
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}

const authenticate = require('./auth/authenticate-middleWare');
const authRouter = require('./auth/auth-Router');
const savedRecipesRouter = require('./router/savedRecipes-router')

const server = express();

server.use(helmet());
// server.options(cors(corsOptions))
// server.use(cors());

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/recipes', authenticate, savedRecipesRouter)

server.get('/',  (req, res) => {
    res.send('Welcome to the Recipe Cheqr API')
})

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => {
    console.log(`\n=== Server Listening on port ${PORT} ===\n`)
    console.log(process.env.PORT)
})
