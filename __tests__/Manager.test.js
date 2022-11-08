const Manager = require("../lib/Manager");

test("Creates Manager object, github, role.", () => {
    const manager = new Manager ("Jay",9,"jj@gmail.com","1234");

    expect(manager.name).toEqual("Jay");
    expect(manager.id).toEqual(9);
    expect(manager.email).toEqual("jj@gmail.com");
    expect(manager.getofficeNumber()).toEqual("1234");
    expect(manager.getRole()).toBe("Manager");
 });