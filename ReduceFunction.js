/*reduce function returns a single value as result after computing list of numbers*/

let listOfNumbers=[10,11,12,13,14,15]
let newArray=[];
let sum=0;
for(let index=0;index<listOfNumbers.length;index++)
{
    //calculating sum
    sum+=listOfNumbers[index];
}
//printing result
console.log("The sum is  "+sum);