"use strict";
class TestClass {
    testfunction() {
        console.log("Hai");
    }
}
let object1 = new TestClass();
object1.testfunction();
/***********parameterized *********/
class TestClass1 {
    printmessage(msg) {
        console.log(msg);
    }
}
const object2 = new TestClass1();
object2.printmessage("Hai Parameterized Function");
class TestClass2 {
    constructor(name) {
        console.log(name);
    }
    printmessage1() {
        console.log("Inside Method");
    }
}
const object3 = new TestClass2("Test");
object3.printmessage1();
/*************access parameter inside function */
class TestClass3 {
    value;
    constructor(value) {
        this.value = value;
        console.log(value);
    }
    printmessage2(age) {
        console.log(this.value + ' ' + age);
    }
}
const object4 = new TestClass3("James");
object4.printmessage2(34);
