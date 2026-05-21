/*function function_name()
{
    code to execute
}*/

function display()/*****non paremeterized */
{
    console.log("Hi")//function definition
}

display()

function add(a,b)/***********parameterizd */
{
    console.log(a+b)
}

add(5,8)


function addition(a,b)
{
    return a+b
}

let sum=addition(2,5)

console.log(sum)

//anonymous function or arrow function

/*function without name
cannot reuse*/
let summ=(a,b)=>a+b
console.log(summ(4,5))
