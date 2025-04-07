const pool = require('../db');

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM car_evaluation');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching all cars:', err);
    res.status(500).json({ message: 'Error fetching cars.' });
  }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM car_evaluation WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Car not found.' });
    }
  } catch (err) {
    console.error('Error fetching car by ID:', err);
    res.status(500).json({ message: 'Error fetching car.' });
  }
};

// Add a new car
exports.addCar = async (req, res) => {
  const { buying, maint, doors, persons, lug_boot, safety } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO car_evaluation (buying, maint, doors, persons, lug_boot, safety) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [buying, maint, doors, persons, lug_boot, safety]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting new car:', err);
    res.status(500).json({ message: 'Error adding car.' });
  }
};

// Update an existing car
exports.updateCar = async (req, res) => {
  const { id } = req.params;
  const { buying, maint, doors, persons, lug_boot, safety } = req.body;
  try {
    const result = await pool.query(
      'UPDATE car_evaluation SET buying = $1, maint = $2, doors = $3, persons = $4, lug_boot = $5, safety = $6 WHERE id = $7 RETURNING *',
      [buying, maint, doors, persons, lug_boot, safety, id]
    );
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Car not found.' });
    }
  } catch (err) {
    console.error('Error updating car:', err);
    res.status(500).json({ message: 'Error updating car.' });
  }
};

// Delete a car
exports.deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM car_evaluation WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Car deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Car not found.' });
    }
  } catch (err) {
    console.error('Error deleting car:', err);
    res.status(500).json({ message: 'Error deleting car.' });
  }
};
