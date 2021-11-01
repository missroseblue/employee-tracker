const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require('console.table');
const { response } = require("express");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Bootcamp1234!",
    database: "employee_tracker",
  },
  console.log("Connected to the employee database.")
);

db.connect((err) => {
  if (err) throw err;
  promptUser();
});

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userOptions",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View Employees by Department",
          "View All Employees by Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
        ],
      },
    ])
    .then((response) => {
      switch (response.userOptions) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View Employees by Department":
          viewEmployeesByDepartment();
          break;
        case "View Employees by Manager":
          viewEmployeesByManager();
          break;
          case "Add Employee":
          createNewEmployee();
          break;
          case "Remove Employee":
          removeEmployee();
          break;
          case "Update Employee Role":
          updateEmployeeRole();
          break;
          case "Update Employee Manager":
            updateEmployeeManager();
            break;

        default:
          break;
      }
    });
}

//============= View All Employees ==========================//
function viewAllEmployees() {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    promptUser();
  });
}

//============= View Employees by Department==========================//
function viewEmployeesByDepartment() {
    db.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id"), 
    function(err, res) {
      if (err) throw err
      console.table(res)
      promptUser();
}
}

//============= View Employees by Manager ==========================//
function viewEmployeesByManager() {
    db.query("SELECT DISTINCT manager.id, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee e Inner JOIN employee m ON e.manager_id = manager.id"),
    function(err, res) {
        if (err) throw err
        console.table(res)
        promptUser();
  }
}

//============= Create New Employee ==========================//
function createNewEmployee() {
  inquirer
    .prompt(
      {
        type: "input",
        name: "newEmployeeFirstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "newEmployeeLastName",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "newEmployeeRole",
        message: "What is the employee's role?",
        choices: [
          "Sales Lead",
          "Salesperson",
          "Lead Engineer",
          "Software Engineer",
          "Account Manager",
          "Accountant",
          "Legal Team Lead",
        ],
      },
      {
        type: "list",
        name: "addEmployeeManager",
        message: "Who is the employee's manager?",
        choices: [
            "Maya Angelou",
            "Ryan Reynolds",
            "Robin Williams",
            "Johny Depp",
            "Marshall Mathers",
            "Ryan Gosling",
            "Angelina Jolie",
            "Charlie Hunnum",
            "Channing Tatum",
            "Sandra Bullock",
            "Blake Lively",
            "Salma Hayek",
            "Jason Mamoa"
        ]
      }
    )

    .then((response) => {
        db.query(
            "INSERT INTO employees SET ?", 
            {
                first_name: response.first_name,
                 last_name: response.last_name, 
                 manager_id: response.manager_id, 
                 role_id: response.role_id
            },

         function (err) {
            if (err) throw err
            console.table(response)
            promptUser()
        }
    )
});
}

//============= Remove Employee ==========================//
function removeEmployee() {
db.query("SELECT employee.id, concat(employee.first_name, ' ' ,  employee.last_name) AS employee FROM employee ORDER BY Employee ASC");
}
inquirer
.prompt(
    {
      type: "list",
      name: "selectEmployee",
      message: "Which employee do you want to remove?",
      choices: [
        "Maya Angelou",
        "Ryan Reynolds",
        "Robin Williams",
        "Johny Depp",
        "Marshall Mathers",
        "Ryan Gosling",
        "Angelina Jolie",
        "Charlie Hunnum",
        "Channing Tatum",
        "Sandra Bullock",
        "Blake Lively",
        "Salma Hayek",
        "Jason Mamoa"
      ]
    },
//     // confirm delete of employee
//     {name: "confirmRemove",
//     type: "list",
//     message: "Are you sure you want to remove this employee",
//     choices: ["NO", "YES"]
// }
// ).then((response) => {

//     if(response.confirmRemove == "YES"){
//         let employeeID;

//         // if confirmed, get ID of employee selected
//         for (i=0; i < employees.length; i++){
//             if (response.employee == employees[i].employee){
//                 employeeID = employees[i].id;
//             }
//         }
//     }
// }

        // // deleted selected employee
        // db.query(`DELETE FROM employee WHERE id=${employeeID};`, (err, res) => {
        //     if(err) return err;

        //     // confirm deleted employee
        //     console.log(`\n EMPLOYEE '${response.employee}' DELETED...\n `);
        // }

//============= Update Employee's Manager ==========================//
function updateEmployeeManager() {
  inquirer
  .prompt(
    {
      type: "list",
      name: "selectEmployee",
      message: "Which employee's manager do you want to update?",
      choices: [
        "Maya Angelou",
        "Ryan Reynolds",
        "Robin Williams",
        "Johny Depp",
        "Marshall Mathers",
        "Ryan Gosling",
        "Angelina Jolie",
        "Charlie Hunnum",
        "Channing Tatum",
        "Sandra Bullock",
        "Blake Lively",
        "Salma Hayek",
        "Jason Mamoa"
      ],
    },
    {
      type: "list",
      name: "updateEmployeeManager",
      message:
        "Which employee do you want to set as manager for the selected employee?",
      choices: [
        "Maya Angelou",
        "Ryan Reynolds",
        "Robin Williams",
        "Johny Depp",
        "Marshall Mathers",
        "Ryan Gosling",
        "Angelina Jolie",
        "Charlie Hunnum",
        "Channing Tatum",
        "Sandra Bullock",
        "Blake Lively",
        "Salma Hayek",
        "Jason Mamoa"
      ],
    }
  )
.then(response); {
    connection.query("UPDATE employee SET WHERE ?", 
    {
      first_name: response.first_name,
      last_name: response.last_name,
      role_id: response.role_id,
      manager_id: response.manager_id
    }, 
    function(err) {
        if (err) throw err
        console.table(response)
        promptUser()
    })
};
});

// //============= Update Employee Role==========================//
// function updateEmployeeRole() {
//             inquirer.prompt(
//     {
//       type: "list",
//       name: "selectEmployeeRole",
//       message: "Which employee's role do you want to update?",
//       choices: [
//         "Maya Angelou",
//         "Ryan Reynolds",
//         "Robin Williams",
//         "Johny Depp",
//         "Marshall Mathers",
//         "Ryan Gosling",
//         "Angelina Jolie",
//         "Charlie Hunnum",
//         "Channing Tatum",
//         "Sandra Bullock",
//         "Blake Lively",
//         "Salma Hayek",
//         "Jason Mamoa"
//       ],
//     },
//     {
//       type: "list",
//       name: "updatedEmployeeRole",
//       message: "What is the employee's new role?",
//       choices: [
//         "Sales Lead",
//         "Salesperson",
//         "Lead Engineer",
//         "Software Engineer",
//         "Account Manager",
//         "Accountant",
//         "Legal Team Lead",
//       ],
//     }

// )

//   .then((answer) => {
//     let newTitleId, employeeId;

//     response.forEach((role) => {
//       if (answer.chosenRole === role.title) {
//         newTitleId = role.id;
//       }
//     });

//     response.forEach((employee) => {
//       if (
//         answer.chosenEmployee ===
//         `${employee.first_name} ${employee.last_name}`
//       ) {
//         employeeId = employee.id;
//       }
//     });

//     let sqls =    `UPDATE employee SET employee.role_id = ? WHERE employee.id = ?`;
//     connection.query(
//       sqls,
//       [newTitleId, employeeId],
//     function(err){
//         if (err) throw err
//         console.table(response)
//         promptUser()
//     })