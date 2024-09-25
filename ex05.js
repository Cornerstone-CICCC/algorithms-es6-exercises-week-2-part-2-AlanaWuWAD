// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [10,32,11,19,9]
if(numbers.some(num => num % 2 === 0)){
    console.log('some of the numbers are even')
}else {
    console.log('no even number')
}
