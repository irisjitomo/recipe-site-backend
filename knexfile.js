// Update with your config settings.

const localPg = {
  host: 'localhost',
  database: 'recipe-cheqr',
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}

const dbConnection = process.env.DATABASE_URL || localPg

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './dev.sqlite3'
    },
		migrations: {
      tableName: 'knex_migrations',
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		},
		pool: {
		  afterCreate: (conn, done) => {
		    // enforces foreign key constraints on SQLite, not needed for other DBMS
		    conn.run('PRAGMA foreign_keys = ON', done);
		  },
		},
  },
  // add this config to project for heroku server
  production: {
    client: 'pg', // npm i pg
    connection: dbConnection, // could be an object or a string
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },


};
