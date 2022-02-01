const Employee = require('../lib/Employee');

test('create and Employee and show name id and email', () => {
    const employeeInfo = new Employee('Mari', 960421, 'employeemail@here.com');

    expect(employeeInfo.name).toBe('Mari');
    expect(employeeInfo.id).toBe('960421');
    expect(employeeInfo.email).toBe('employeemail@here.com');
});