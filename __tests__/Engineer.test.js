const Engineer = require("../lib/Engineer");

test("Creates Engineer object, github, role.", () => {
    const engineer = new Engineer("Jay", 1, "jj@gmail.com", "jj99");

    expect(engineer.name).toEqual("Jay");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual("jj@gmail.com");
    expect(engineer.getGithubUsername()).toEqual("jj99");
    expect(engineer.getRole()).toEqual("Engineer");
}); 