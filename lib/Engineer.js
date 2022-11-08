const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, githubUser) {
       super(name, id, email);
        this.githubUser = githubUser;
    }
    getGithubUsername() {
        return this.githubUser;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer