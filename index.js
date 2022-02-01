const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

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
                    return false;
                } 
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
                    return false;
                } 
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
                    return false;
                } 
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
                    return false;
                } 
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
            type: 'list',
            name: 'position',
            message: 'Choose the position of yout Employee',
            choices: [ 'Engineer', 'Intern', 'None']
        }
    ]).then(employeeDetail => {
        if(employeeDetail.position === 'Engineer'){
            employeeEngineer();
        } else if (employeeDetail.position === 'Intern'){
            employeeIntern();
        } else if (employeeDetail.position === 'None'){
            writeToFile();
        }
    })
}

// employeeEngineer();
const employeeEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your Enginees's name?",
            validate: managerName => {
                if(managerName) {
                    return true;
                } else {
                    console.log("Please enter Employee's name");
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's Employee ID?",
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's work Email.",
            validate: workEmail => {
                if(workEmail){
                    return true;
                } else {
                    console.log("Please enter employee's work Email!");
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'github',
            message:["Please enter employee's GitHub Username"],
            validate: githubInput => {
                if(githubInput){
                    return true;
                } else {
                    console.log("Please enter employee's GitHub Username!");
                    return false;
                } 
            }
        }
    ]).then(engineerDetail => {
        let engineer = new Engineer(
            engineerDetail.name,
            engineerDetail.id,
            engineerDetail.email,
            engineerDetail.github,
            engineerDetail.position)

            employeeArray.push(engineer);

            newEmployee();
    });
}

// employeeIntern();
const employeeIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's Name?",
            validate: managerName => {
                if(managerName){
                    return true;
                } else {
                    console.log("Please enter Intern's Name!");
                     return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Intern's Employee ID?",
            validate: employeeId => {
                if(employeeId){
                    return true;
                } else {
                    console.log("Please enter Employee ID!");
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter Intern's work Email.",
            validate: workEmail => {
                if(workEmail){
                    return true;
                } else {
                    console.log("Please enter Intern's work Email!");
                    return false
                }
            }
        }
    ]).then(internDetail => {
        let intern = new Intern(
            internDetail.name,
            internDetail.id,
            internDetail.email,
            internDetail.school)

            employeeArray.push(intern);

            newEmployee();
    })
}

// writeToFile();
 function writeToFile() {
     var joinHtml = path.join(__dirname, 'dist/index.html');
     fs.writeFileSync(joinHtml, htmlHelper(employeeArray), 'utf-8')
 }

function init(){
    managerEntry();
}

init();