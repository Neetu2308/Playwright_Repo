/*collection of objects

to handle more than one object

class classname{
}

*/

class student{
    name="John"

}
let obj=new student()
console.log(obj.name)
console.log("**********************************")

//class with method
class student1{
    name="Leena"
    display()//when crearing function inside the class no function keyword is required
{
    console.log(this.name)
}

}

let obj1=new student1()
obj1.display()
console.log("**********************************")
//passing value through oject.In this case we need to create constructor manually
//constructor is special method in a class that is automatically executed when an object is created and is used to initialize vale
class student2{

    constructor(name){
        this.name=name
    }
    display()
{
    console.log(this.name)
}
}
let obj2=new student2("Sam")
obj2.display()
console.log("**********************************")

//constructor  with multiple ppties
class student3{
    constructor(name,age)
    {
        this.student_name=name
        this.student_age=age
    }
    display()
    {
        console.log(this.student_name)
        console.log(this.student_age)
    }
}
let obj3=new student3("James",6)
let obj4=new student3("Ann",12)

obj3.display()
obj4.display()
console.log("**********************************")
//
class student5{
    get college() //getter method>>used to retrieve data//we should return 
    {
        return("Abc college")
    }
}
let obj5=new student5()
console.log(obj5.college)