const express = require('express');
// const cors = require('cors');
var cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

var corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

const authenticate = require('./auth/authenticate-middleWare');
const authRouter = require('./auth/auth-Router');
const savedRecipesRouter = require('./router/savedRecipes-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use((req, res, next) => {
  res.header('Acess-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
// server.options(cors(corsOptions))
// server.use(cors(corsOptions));
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/recipes', authenticate, savedRecipesRouter);

server.get('/', (req, res) => {
  res.send('Welcome to the Recipe Cheqr API');
});

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => {
  console.log(`\n=== Server Listening on port ${PORT} ===\n`);
  //   console.log(process.env.PORT);
});
