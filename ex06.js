// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [10,32,11,19,-10]
if(numbers.every(num => num>0)){
    console.log('every number is positive')
}else{
    console.log('not all positive ')
}