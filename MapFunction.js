/* .Map function creates a new array from calling a function for every element
.map doesn't execute function for empty elements
.map function doesn't change the original array*/
function DoubleTheValue(number)
{
    return number*2;
}
let listOfNumbers=[24,26,31,12,34];
let newList=[];
for(let index=0;index<listOfNumbers.length;index++)
{
    //calling function for each and every element
    newList.push(DoubleTheValue(listOfNumbers[index]));
}
//printing new list
console.log("After doubling "+newList);

