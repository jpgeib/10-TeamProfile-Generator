const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this._school = school;
    }

    getSchool() {
        return this._school;
    }

    getRole() {
        return "Intern"
    }
};

module.exports = Intern;