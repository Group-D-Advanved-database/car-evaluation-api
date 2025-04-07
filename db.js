
// db.js
const { Pool } = require('pg');

// Set up PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'car_evaluation',
  password: 'Cmp129923.',
  port: 5432,
});

module.exports = pool;

