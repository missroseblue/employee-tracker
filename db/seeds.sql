INSERT INTO departments (department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000, 1),
('Sales lead', 100000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Account Manager', 150000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Maya', 'Angelou', 8, NULL),
('Ryan', 'Reynolds', 1, 1),
('Robin', 'Williams', 4, 1),
('Johnny', 'Depp', 3, 1),
('Marshall', 'Mathers', 1, 1),
('Ryan', 'Gosling', 1, 1),
('Angelina', 'Jolie', 8, NULL),
('Charlie', 'Hunnam', 4, 7),
('Channing', 'Tatum', 4, 7),
('Sandra', 'Bullock', 2, 7),
('Blake', 'Lively', 7, 7),
('Salma', 'Hayek', 5, 7),
('Jason', 'Mamoa', 6, 7);
