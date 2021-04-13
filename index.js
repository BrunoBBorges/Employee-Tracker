const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "root",
    database: "employees_db",
});

function init () {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Please select an option",
            choices: ["view", "add", "remove/change", "exit"],
        })
        .then(function (answer){
            switch (answer.action) {
                case "view": 
                    return view();
                case "add":
                    return add();
                case "remove/change":
                    return editrole();
                case "exit":
                    return connection.end();
            }
        });
}

function view() {
    inquirer
        .prompt({
            name: "viewoption",
            type: "list",
            message: "what would you like to see?",
            choices: ["view employees", "view roles", "view departments"],
        })
    .then(function(answer) {
        let query; 
        switch (answer.viewoption){
            case "view employees":
                query = "select * from employees";
                break;
            case "view roles": 
                query = "select * from roles";
                break;
            case "view departments":;
                query = "select * from departments";
                break;
        }
        //handle errors 
        connection.query(query,(err, data) => {
            if (err) throw err;
            console.table(data);
            return init; 
        });
    });
}

function add() {
    inquirer
        .prompt({
            name: "addoption",
            type: "list",
            message: "what do you want to add",
            choices: ["department", "role", "employee"],
        })
        .then(function (answer){
            switch (answer.addoption) {
                case "role":
                    return addrole();
                case "employee":
                    return addemployee();
                case "department":
                    return adddepartment();
            }
        });
}

function editrole() {
    connection.query("SELECT * FROM employees", function (err, results) {
        if (err)throw err;
        inquirer
            .prompt([
                {
                    name: "empChoice",
                    type: "list",
                    message: "which employee would you like to edit",
                    choices: function () {
                        let choicearray = []; 
                        for (result of results) {
                            choicearray.push(`${result.id}: ${result.firstName} ${result.lastName}`);
                        }
                        return choicearray
                    },
                },
                {
                    name: "rolenum",
                    type: "number",
                    message: "whats the employee's role id?"
                },
            ])
            .then(function (answer) {
                let empid = answer.empChoice.split(":")[0];
                connection.query(
                    "update employees SET ? WHERE ?",
                    [
                        {
                            roleId: answer.rolenum
                        },
                        {
                            id: empid
                        },
                    ],
                    //handle errors
                    function(err) {
                        if (err) throw (err);
                        return init();
                    }
                );
            });
    });
}

function adddepartment() {
    inquirer
        .prompt([
            {
                name: "departmentname",
                type: "input",
                message: "what is the name of the department you want to add",
            },
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO Departments SET ?",
                {
                    name: answer.departmentname,
                },
                function (err) {
                    if (err)throw err;
                    init()
                }
            );
        });
}

function addrole() {
    inquirer
        .prompt ([
            {
                name: "roletitle",
                type: "input",
                message: "what is the title of this role",
            },
            {
                name: "rolesalary",
                type: "number",
                message: "what is this role's salary?",
            },
            {
                name: "roledepartmentid",
                type: "number",
                message: "what is the department id for this role?"
            },
        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO Roles SET ?",
                {
                    title: answer.roletitle,
                    salary: answer.rolesalary,
                    departmentid: answer.roledepartmentid,
                },
                function (err) {
                    if (err) throw (err);
                    init()
                }    
            );
        });
}

function addemployee() {
    inquirer
        .prompt ([
            {
                name: "firstName",
                type: "input",
                message: "what is the employees first name?"
            },
            {
                name: "lastName",
                type: "input",
                message: "what is the employees last name?"
            },
            {
                name: "roleID",
                type: "number",
                message: "what is the employees roleID?"
            },
            {
                name: "managerId",
                type: "number",
                message: "what is the employees managerID if any?"
            },
        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO employees SET ?",
                {
                    firstName: answer.firstName,
                    lastName: answer.lastName,
                    roleId: answer.roleId,
                    managerId: answer.managerId,
                },
                function (err) {
                    if(err) throw(err);
                    init();
                }
            );
        });   
}