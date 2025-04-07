const fs = require('fs');
const csv = require('csv-parser');
const { Pool } = require('pg'); 

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'car_evaluation',
  password: 'Cmp129923.', // 
  port: 5432,
});

const results = [];

fs.createReadStream('car.data.csv') 
  .pipe(csv({ headers: ['buying', 'maint', 'doors', 'persons', 'lug_boot', 'safety', 'class'], separator: ',' }))
  .on('data', (data) => results.push(data))
  .on('end', async () => {
    console.log('CSV file successfully processed');

    const client = await pool.connect();

    try {
      const queryText = `
        INSERT INTO car_evaluation (buying, maint, doors, persons, lug_boot, safety, class)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;

      for (let row of results) {
        await client.query(queryText, [
          row.buying,
          row.maint,
          row.doors,
          row.persons,
          row.lug_boot,
          row.safety,
          row.class
        ]);
      }

      console.log(`✅ ${results.length} rows inserted into the database!`);
    } catch (err) {
      console.error('Error inserting data:', err);
    } finally {
      client.release();
      pool.end();
    }
  });
