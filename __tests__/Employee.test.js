const Employee = require('../lib/Employee');

test('create an employee object and show name id and email', () => {
    const employeeInfo = new Employee('Mari', 960421, 'employeeemail@here.com');

    expect(employeeInfo.name).toBe('Mari');
    expect(employeeInfo.id).toBe(960421);
    expect(employeeInfo.email).toBe('employeeemail@here.com');
});