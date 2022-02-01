const Engineer = require('../lib/Engineer');

test('create an engineer object and show name id and email', () => {
    const engineer = new Engineer('Mari', 960421, 'employeeemail@here.com');

    expect(engineer.name).toBe('Mari');
    expect(engineer.id).toBe(960421);
    expect(engineer.email).toBe('employeeemail@here.com');
});