class Employee{
                          //instance variable
    static companyName='Harman';    //class variable

    constructor(id, name){
        this.id=id;     //this refers to instance
        this.name=name;
    }
}

var emp=new Employee(1, 'Ravi');
// emp.id=1
// emp.name='Raja'

console.log(Employee.companyName);
