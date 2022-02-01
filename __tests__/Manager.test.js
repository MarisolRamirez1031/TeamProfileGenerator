const Manager = require('../lib/Manager');

test('create a Manager object', () => {
    const managerData = new Manager('Mari', 960421, 'employeeemail@here.com');

    expect(managerData.name).toBe('Mari');
    expect(managerData.id).toBe(960421);
    expect(managerData.email).toBe('employeeemail@here.com');
    expect(managerData.officeNumber).toBe('1031');
    expect(managerData.role).toBe('Manager');
});