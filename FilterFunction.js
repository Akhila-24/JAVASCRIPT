/* .filter function creates a new array from calling a function for every element
.filter doesn't execute function for empty elements
.filter function doesn't change the original array*/
function ReturnEvenNumber(number)
{
    if(number%2==0)
    return true;
    return false;
}
let listOfNumbers=[42,256,124,128,986]
let newArray=[];
for(let index=0;index<listOfNumbers.length;index++)
{
    //calling function for each and every element
    let returnedResult=ReturnEvenNumber(listOfNumbers[index]);
    if(returnedResult)
    newArray.push(listOfNumbers[index]);
}
//printing result
console.log("After filtering "+newArray);