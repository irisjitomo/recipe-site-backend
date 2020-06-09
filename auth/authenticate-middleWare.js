const jwt = require('jsonwebtoken');
const secret = require('./secretForToken');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, secret.secret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'invalid token' });
			} else {
				req.user = {
					username: decodedToken.username
				};
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'No token' });
	}
};