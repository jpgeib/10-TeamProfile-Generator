const fs = require("fs");
const path = require("path");

const templateHTML = path.resolve(__dirname, "../HTML");

const render = function(employees) {
    const html = [];

    html.push(employees.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));
    html.push(employees.filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern)));
    html.push(employees.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)));

    return renderTeam(html.join(""));
};

const renderManager = function(manager) {
    let template = fs.readFileSync(path.resolve(templateHTML, "manager.html"), "utf8");
    template = fillInfo(template, "name", manager.getName());
    template = fillInfo(template, "role", manager.getRole());
    template = fillInfo(template, "email", manager.getEmail());
    template = fillInfo(template, "id", manager.getId());
    template = fillInfo(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const renderEngineer = function(engineer) {
    let template = fs.readFileSync(path.resolve(templateHTML, "engineer.html"), "utf8");
    template = fillInfo(template, "name", engineer.getName());
    template = fillInfo(template, "role", engineer.getRole());
    template = fillInfo(template, "email", engineer.getEmail());
    template = fillInfo(template, "id", engineer.getId());
    template = fillInfo(template, "github", engineer.getGithub());
    return template;
};

const renderIntern = function(intern) {
    let template = fs.readFileSync(path.resolve(templateHTML, "intern.html"), "utf8");
    template = fillInfo(template, "name", intern.getName());
    template = fillInfo(template, "role", intern.getRole());
    template = fillInfo(template, "email", intern.getEmail());
    template = fillInfo(template, "id", intern.getId());
    template = fillInfo(template, "school", intern.getSchool());
    return template;
};


const renderTeam = function(html) {
    const template = fs.readFileSync(path.resolve(templateHTML, "team.html"), "utf8");
    return fillInfo(template, "final", html);
};

const fillInfo = function() {
    const notation = new RegExp("{ " + element + " }", "gm");
    return template.replace(notation, value);
};

module.exports = render;