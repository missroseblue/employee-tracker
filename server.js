const inputCheck = require('./utils/inputCheck');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql2");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "Bootcamp1234!",
    database: "employee_tracker",
  },
  console.log("Connected to the employee database.")
);

//Get all employees
app.get("/api/employee_tracker", (req, res) => {
  const sql = "SELECT * FROM employee_tracker";
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Get a single employee
app.get('/api/employee_tracker/:id', (req, res) => {
    const sql = `SELECT * FROM employee_tracker WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });

  // Delete a employee
app.delete('/api/employee_tracker/:id', (req, res) => {
    const sql = `DELETE FROM employee_tracker WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });

//create a candidate post
app.post('/api/employee_tracker', ({body}, res) => {
    const errors = inputCheck(
        body, 
        'first_name', 
        'last_name', 
        'role_id', 
        'manager_id'
        );
    if (errors) {
      res.status(400).json({error: errors});
      return;
    }
  })

  const sql = `INSERT INTO employees ('first_name', 'last_name', 'role_id', 'manager_id')
  VALUES (?,?,?)`;
const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

db.query(sql, params, (err, result) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.json({
    message: 'success',
    data: body
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
