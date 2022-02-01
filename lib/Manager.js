const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber, position) {
        super(name, id, email, position);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return officeNumber;
    }
    
    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;