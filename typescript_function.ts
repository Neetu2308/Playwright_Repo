function greet():void
{
    console.log("Hello")
}

greet()

//typescript can automatically identify the return type which is type interference


/************Parameterized*********/
 
function addition(a:number,b:number)
{
    console.log(a+b)
}
addition(10,15)


/**********fuction with return type */
function substraction(a:number,b:number):number
{
    return a-b
}
console.log(substraction(25,10))

function stop():never//pgm will never stop
{
    throw new Error("Stopped!!!")
}
stop()