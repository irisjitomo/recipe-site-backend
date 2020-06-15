const db = require('../database/dbConfig');

module.exports = {
  add,
  add2,
  findById,
  findBy,
  retrieve
};

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return db('users').where({ id }).first();
}

// function add(user) {
//   return db('users')
//     .insert(user, 'id')
//     .then((ids) => {
//       const [id] = ids;
//       return findById(id);
//     });
// }

function retrieve() {
  return db('users')
}

function add2(user) {
  return db('users')
    .insert(user)
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db('users').where({ id }).first();
}

function findBy(user) {
  return db('users').where(user);
}
