const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school, position) {
        super(name, id, email);
        this.school = school;
        this.position = position;
    }

    getSchool(){
        this.school = school;
    };

    getRole(){
        this.position = 'Intern';
    }
}

module.exports = Intern;