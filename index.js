const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('../auth/authenticate-middleware.js');
// const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/',  (req, res) => {
    res.send('Welcome to the Recipe Cheqr API')
})

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
    console.log(`\n=== Server Listening on port ${PORT} ===\n`)
})
