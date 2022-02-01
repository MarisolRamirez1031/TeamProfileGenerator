const fs = require('fs');
const inquirer = require('inquirer');
const { inherits } = require('util');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArray = [];


const managerEntry = () => {
    inquirer.prompt(
        [
        {
            type: 'input',
            name: 'name',
            message: 'Welcome Manager!, What is your name?',
            validate: managerName => {
                if(managerName){
                    return true;
                } else {
                    console.log('You need to enter a name!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your work email',
            validate: workEmail => {
                if(workEmail){
                    return true;
                } else {
                    console.log('Please enter your work email!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter your work Office Number',
            validate: officeLocation => {
                if(officeLocation) {
                    return true;
                } else {
                    console.log('Please enter your Office Number!');
                } return false;
            }
        },
    ]).then(managerInput => {
        let manager = new Manager(
            managerInput.name,
            managerInput.id,
            managerInput.email,
            managerInput.position)

            employeeArray.push(manager);
            newEmployee();
    })
}

const newEmployee = () => {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'position',
            message: 'Choose the position of yout Employee',
            choices: [ 'Engineer', 'Intern', 'None']
        }
    ]).then(employeeDetail => {
        if(employeeDetail.position === 'Engineer'){
            promptEngineer();
        } else if (employeeDetail.position === 'Intern'){
            promptIntern();
        } else if (employeeDetail.position === 'None'){
            writeToFile();
        }
    })
}

// promptEngineer();

// promptIntern();

// writeToFile();


function init(){
    managerEntry();
}

init();