const Employee = require("./Employee")


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this._github = github;
    }

    getGithub() {
        return this._github;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;