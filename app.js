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
