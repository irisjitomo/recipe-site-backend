const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Iris', password: bcrypt.hashSync('password', 7)},
        {id: 2, username: 'Bri', password: bcrypt.hashSync('password', 7)},
      ]);
    });
};
