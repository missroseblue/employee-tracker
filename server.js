const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');



// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Bootcamp1234!',
      database: 'employee_tracker'
    },
    console.log('Connected to the employee database.')
  );

  db.query(`SELECT * FROM employee_tracker`, (err, rows) => {
    console.log(rows);
  });

  // GET a single employee
// db.query(`SELECT * FROM employee_tracker WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });

// Delete a employee

// db.query(`DELETE FROM employee_tracker WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

// Create an employee
const sql = `INSERT INTO employee_tracker (id, first_name, last_name, role_id, manager_id) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1, 6];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });