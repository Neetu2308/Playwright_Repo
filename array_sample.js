let x=[1,2,3,4,5,6]
console.log(x)

let y=Array(1,2,3)
console.log(y)

let z=Array(3)//three spaces are allocated
/*console.log(z)
z.push(1)
z.push(2)
z.push(3)
console.log(z)*/

for(let i=1;i<=3;i++)
{
    z.push(i)
}
console.log(z)

console.log(z.length)

//sort method

let fruits=["banana","apple","mango"]
fruits.sort()
console.log(fruits)

let num=[10,7,6,13,4]
num.sort((a,b)=>a-b)//ascending order sort numbers
console.log(num)

let num1=[10,7,6,13,4]
num1.sort((o,p)=>p-o)//descending order sort numbers
console.log(num1)

let k=[1,1.5,"Hi"]
console.log(k)

let arr2=Array(10)
for (let k=0;k<=5;k++)
{
    arr2[k]=k

    console.log(arr2[k])
}


let arr=Array(10)
for (let i=0;i<=5;i++)
{
    arr[i]=i

    console.log(arr)
}

let arr1=[]
for (let j=0;j<=5;j++)
{
    arr1.push(j)

    console.log(arr1)
}
