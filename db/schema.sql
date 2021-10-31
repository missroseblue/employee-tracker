CREATE table department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);
CREATE table role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(6, 2),
    department_id INTEGER AUTO_INCREMENT
);
CREATE table employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER AUTO_INCREMENT,
    manager_id INTEGER AUTO_INCREMENT
);