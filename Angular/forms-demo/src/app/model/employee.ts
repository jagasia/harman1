export class Employee {
    id:number=0;
    name:string='';
    department:string='';
    salary:number=0;

    constructor(id:number=0, name:string='', department:string='', salary:number=0){
        this.id=id;
        this.name=name;
        this.department=department;
        this.salary=salary;
    }

}
