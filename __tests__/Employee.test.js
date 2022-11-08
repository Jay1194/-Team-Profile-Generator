const Employee = require("../lib/Employee"); 

test("Creates Employee Object.", () => {
    const employee = new Employee("Jay T", 2002, "jay@jay.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

