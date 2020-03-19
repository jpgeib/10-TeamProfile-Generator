const fs = require("fs");
const path = require("path");

const templateHTML = path.resolve(__dirname, "../HTML");

const render = function(employees) {
    const html = [];

    html.push(employees.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));
};

const renderManager = function(manager) {
    let template = fs.readFileSync(path.resolve(templateHTML, "manager.html"), "utf8");
    template = replacePlaceholders()
}


const renderTeam = function(html) {
    const template = fs.readFileSync(path.resolve(templateHTML, "team.html"), "utf8");
};

const fillInfo = function() {
    const 
};