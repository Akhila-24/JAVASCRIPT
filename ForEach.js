/*forEach function calls function and every element .
forEach function doesn't execute for empty elements*/
function PrintFunction(fruit)
{
    console.log(fruit);
}
let fruits=['apple','mango','strawberry','grapes']
for(let index=0;index<fruits.length;index++)
{
    PrintFunction(fruits[index]);
}