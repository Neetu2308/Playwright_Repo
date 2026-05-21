class TestClass{
    testfunction()//no need to write keyword function since function inside class
    {
        console.log("Hai")
    }
}
let object1=new TestClass()
object1.testfunction()
/***********parameterized *********/
class TestClass1{
    printmessage(msg:string)
    {
        console.log(msg)
    }
}

const object2=new TestClass1()
object2.printmessage("Hai Parameterized Function")

class TestClass2{

    constructor(name:string)
    {
        console.log(name)
    }
    printmessage1()
    {
        console.log("Inside Method")
    }
}

const object3=new TestClass2("Test")
object3.printmessage1()

/*************access parameter inside function */
class TestClass3{
    value:string
    constructor(value:string)
    {
        this.value=value

        console.log(value)
    }

    printmessage2(age:number)
    {
        console.log(this.value+' '+age)
    }
}
const object4=new TestClass3("James")
object4.printmessage2(34)