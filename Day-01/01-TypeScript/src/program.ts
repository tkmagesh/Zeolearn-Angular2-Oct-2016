console.log('Welcome to TypeScript!');

var n:number = 10;
const pi:number = 3.14;

//let, const
//let - block level scope

function add (x:any, y:any):number{
    return x + y;
}

let x:number = add("10", "20");

class Employee{
    id : number;
    name : string;
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    print(){
        console.log(this.id, this.name);
    }
    static isEmployee(obj:any){
        return obj instanceof Employee;
    }
}

let emp:Employee = new Employee(100, 'Magesh');
emp.print();
console.log(Employee.isEmployee(emp));
