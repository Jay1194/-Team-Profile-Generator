const Intern = require("../lib/Intern");

test("Creates Intern object, github, role.", () => {
    const intern = new Intern ("Jay",1,"jj@gmail.com","SMU");

    expect(intern.school) .toEqual(expect.any(String));
    expect(intern.name).toEqual("Jay");
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual("jj@gmail.com");
    expect(intern.getSchool()).toEqual("SMU");
    expect(intern.getRole()).toBe("Intern");
 });