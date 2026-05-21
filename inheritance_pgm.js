class Parent{

  display()
    {
        console.log("Inheritance pgm")
        
    }
}

class Child extends Parent{


}

let  obj=new Child()
obj.display()
console.log("**********************************")

class Animal{
    eat()
    {
        console.log("Animal eats food")
    }
}

class Cow extends Animal
{
    use()
    {
        console.log("Cow gives Milk")
    }
}
let  obj1=new Cow()
obj1.use()
obj1.eat()
console.log("**********************************")


class Person{
    constructor(name){
      this.name=name
      
    }
    show(){
        console.log("Hello "+ this.name)
    }
}

class Name extends Person
{
    display()
    {
        console.log("Parameterized constructor")
    }
    
}
let obj2=new Name("Sam")
obj2.display()
obj2.show()
console.log("**********************************")


//super Keyword>>to access Parent class constructor and class
//when Parent and child have same method

class Parent2{
    show()
    {
        console.log("Printing in Parent class...")
    }
}
class Child2 extends Parent2{
    show()
    {
         super.show()
         console.log("Printing in Child class...")
        
    }
}
let objchild=new Child2()
objchild.show()
console.log("**********************************")

//super in constructor

class Person4{
    constructor (name){
        this.name=name
    }
}
class student2 extends Person4{
    constructor(name,mark){

        super(name)
        
            this.name=name
            this.mark=mark
    }
        show(){
                        console.log(this.name+' '+this.mark)

        }
    }

let objstud=new student2("Jack",10)
objstud.show()