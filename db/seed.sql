USE employees_db; 

-- Roles seed
INSERT INTO Roles 
    (title, salary, deparmentid)
VALUES 
    ("Salesperson", 60000, 1);
    ("Lead Salesperson", 80000, 2);
    ("Engineer", 100000, 3);
    ("Lead Engineer", 200000, 4);
    ("Lawyer", 150000, 5);
    ("Legal Team Manager", 170000, 6);

-- Department Seed

INSERT INTO Departments 
    (name)
VALUES 
    ("Sales");
    ("Enineering");
    ("Legal");

-- Employee Seed

INSERT INTO employees 
    (firstName, lastName, roleId, managerId)
VALUES 
    ("John", "Doe", "1", NULL);
    ("Bob", "Vance", "2", "1");
    ("Jim", "Halpert", "3", NULL);
    ("Michael", "Scott", "4", "2");
    ("Pam", "Halpert", "5", NULL);
    ("Creed", "Braton", "6", "3");

