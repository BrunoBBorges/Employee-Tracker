DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE empDepartments (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR (40),
    PRIMARY KEY (id)
);

CREATE TABLE empRole (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (40),
    salary INT,
    deparmentid INT,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(40),
    lastName VARCHAR(40), 
    roleId INT,
    managerId INT, 
    PRIMARY KEY (id)      
);