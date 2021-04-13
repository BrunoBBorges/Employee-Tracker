USE employees_db; 

-- Roles seed
INSERT INTO Roles (title, salary, deparmentid)
VALUES ("Salesperson", 60000, 1);

INSERT INTO Roles (title, salary, deparmentid)
VALUES ("Lead Salesperson", 80000, 2);

INSERT INTO Roles (title, salary, deparmentid)
VALUES ("Engineer", 100000, 3);

INSERT INTO Roles (title, salary, deparmentid)
VALUES ("Lead Engineer", 200000, 4);

INSERT INTO Roles (title, salary, deparmentid)
VALUES ("Lawyer", 150000, 5);

INSERT INTO Roles (title, salary, deparmentid)
VALUES ("Legal Team Manager", 170000, 6);

-- Department Seed

INSERT INTO Departments (name)
VALUES ("Sales");

INSERT INTO Departments (name)
VALUES ("Enineering");

INSERT INTO Departments (name)
VALUES ("Legal");

-- Employee Seed

INSERT INTO employees (firstName, lastName, roleId, managerId)
VALUES ("John", "Doe", "1", NULL);
VALUES ("Bob", "Vance", "2", "1");
VALUES ("Jim", "Halpert", "3", NULL);
VALUES ("Michael", "Scott", "4", "2");
VALUES ("Pam", "Halpert", "5", NULL);
VALUES ("Creed", "Braton", "6", "3");

