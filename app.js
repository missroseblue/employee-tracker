const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: "What would you like to do?",
      choices: [
      'View All Employees',
      'View Employees by Department',
      'View All Employees by Manager',
      'Add Employee',
      'Remove Employee',
      'Update Employee Role',
      'Update Employee Manager'
    ]
    },
  ]);
};

// promptUser()
// .then

//function newEmployee{
//     this.employees.first_name;
// if statement
// }



newEmployee.prototype.createNewEmployee = function () {
    this.
inquirer
.prompt(
{type: "input",
name: "newEmployeeFirstName",
message: "What is the employee's first name?"

},
{type: "input",
name: "newEmployeeLastName",
message: "What is the employee's last name?"

},
{type: "list",
name: "newEmployeeRole",
message: "What is the employee's role?",
choices: [
    'Sales Lead',
    'Salesperson',
    'Lead Engineer',
    'Software Engineer',
    'Account Manager',
    'Accountant',
    'Legal Team Lead'

]
},
{type: "list",
name: "addEmployeeManager",
message: "Who is the employee's manager?",
choices: [
    '',
    '',
    '',
    '',
    '', 
    '',


]
}
)}

updateManager.prototype.updateEmployeeManager = function () {
    inquirer
    .prompt(
{type: "list",
name: "selectEmployee",
message: "Which employee's manager do you want to update?",
choices: [
    'Maya Angelou',
    'Ryan Reynolds',
    'Robin Williams',
    'Johny Depp',
    'Account Manager',
    'Freddy Mercury',
    'Ryan Gosling',
    'Angelina Jolie',
    'Selena Quintanilla',
    'Charlie Hunnum',
    'Channing Tatum',
    'Sandra Bullock',
    'Blake Lively',
    'Salma Hayek',
    'Jason Mamoa',

]
},
{type: "list",
name: "newEmployeeManager",
message: "Which employee do you want to set as manager for the selected employee?",
choices: [
    '',
    '',
    '',
    '',
    '',
    '',


]
}
    )
}

updateRole.prototype.updateEmployeeRole = function () {
    this.
inquirer
.prompt(
    {type: "list",
name: "selectEmployeeRole",
message: "Which employee's role do you want to update?",
choices: [
    'Maya Angelou',
    'Ryan Reynolds',
    'Robin Williams',
    'Johny Depp',
    'Account Manager',
    'Freddy Mercury',
    'Ryan Gosling',
    'Angelina Jolie',
    'Selena Quintanilla',
    'Charlie Hunnum',
    'Channing Tatum',
    'Sandra Bullock',
    'Blake Lively',
    'Salma Hayek',
    'Jason Mamoa',

]
},
{type: "list",
name: "updatedEmployeeRole",
message: "What is the employee's new role?",
choices: [
    'Sales Lead',
    'Salesperson',
    'Lead Engineer',
    'Software Engineer',
    'Account Manager',
    'Accountant',
    'Legal Team Lead'

]
},

{type: "list",
name: "UpdateEmployeeRoleManager",
message: "Who is the employee's manager?",
choices: [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]
}
)}