const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.position = position;
    }
}

module.exports = Intern;