const Employee = require('../lib/Employee');

test('create an employee object and show name id email and position', () => {
    const employeeInfo = new Employee('Mari', 960421, 'employeeemail@here.com');

    expect(employeeInfo.name).toBe('Mari');
    // expect(employeeInfo.id).toBe(960421);
    // expect(employeeInfo.email).toBe('employeeemail@here.com');
    // expect(employeeInfo.position).toBe('Engineer');
});

test('getName', () => {
    const employeeInfo = new Employee('Mari');
    expect(employeeInfo.getName()).toBe('Mari');
})

test('getId', () => {
    const employeeInfo = new Employee('Mari', 960421, 'employeeemail@here.com');
    expect(employeeInfo.id).toBe(960421);
});

test('getEmail', () => {
    const employeeInfo = new Employee('Mari', 960421, 'employeeemail@here.com');
    expect(employeeInfo.email).toBe('employeeemail@here.com');
});

test('getRole', () => {
    const employeeInfo = new Employee('Mari', 960421, 'employeeemail@here.com', 'Intern');
    expect(employeeInfo.position).toBe('Intern');
});