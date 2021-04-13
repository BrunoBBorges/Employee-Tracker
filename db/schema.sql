DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE Departments (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE Roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30),
    salary INT,
    deparmentid INT,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(30),
    lastName VARCHAR(30), 
    roleId INT,
    managerId INT, 
    PRIMARY KEY (id)      
);