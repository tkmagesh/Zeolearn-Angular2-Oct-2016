console.log('Welcome to TypeScript!');
var n = 10;
var pi = 3.14;
//let, const
//let - block level scope
function add(x, y) {
    return x + y;
}
var x = add("10", "20");
var Employee = (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.print = function () {
        console.log(this.id, this.name);
    };
    Employee.isEmployee = function (obj) {
        return obj instanceof Employee;
    };
    return Employee;
}());
var emp = new Employee(100, 'Magesh');
emp.print();
console.log(Employee.isEmployee(emp));
