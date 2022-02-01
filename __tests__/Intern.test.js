const Intern = require('../lib/Intern');

test('create an intern object and show name id email and school', () => {
    const internData = new Intern('Mari', 960421, 'employeeemail@here.com', 'UT at Austin');

    expect(internData.name).toBe('Mari');
    expect(internData.id).toBe(960421);
    expect(internData.email).toBe('employeeemail@here.com');
    expect(internData.school).toBe('UT at Austin');
})