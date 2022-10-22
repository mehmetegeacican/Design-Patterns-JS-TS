
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}
function say() {
  console.log("Hi, I am", this.name, " and I am a ", this.type);
}
function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Bob", 1));
employees.push(employeeFactory.create("Jane", 2));
employees.push(employeeFactory.create("Taylor", 1));
employees.push(employeeFactory.create("Jamie", 1));
employees.push(employeeFactory.create("Tim", 2));
console.log(employees);

employees.forEach((employee) => {
    say.call(employee);
})
