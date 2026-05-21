/*Syntax-using object literal
Let object name={
    key1:value1,
    key2:value2


}*/

let student={
    name:"Neetu",
    age:12
}
console.log(student.name,student.age)
console.log("**********************************")

//object literal with method or function
let a={
    first_name:"ABC",
    last_name:"XYZ",
    full_name:function(){
        console.log(this.first_name+this.last_name)
    }


}
a.full_name()
console.log("Frist_name:"+a.first_name)
console.log("Lat_name:"+a.last_name)
console.log("**********************************")

//short hand method--w/out function keyword
let b={
    name:"Sam",
    age:22,
    study(){
        console.log(this.name+' '+this.age)
    }
}
b.study()
console.log("**********************************")


//object literals with parameterized

let student2={
    name:"Tom",
    study(subject)
        {
            console.log(this.name+" is studing "+subject)
        }
    
}
student2.study("Math")
console.log(student2.name)
console.log("**********************************")


//method with return

let student3={
    name:"Ann",
    study(subject)
    {
        return(this.name+" is studing "+subject)
    }
}
//calling the method and storing return values
let result1=student3.study("Math")
let result2=student3.study("Science")
//printing the return values
console.log(result1)
console.log(result2)
console.log("Student_Name:"+student3.name)
console.log("**********************************")
