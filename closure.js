// Take a look at the function below. You would think it should print after 1 second(s):1, after 2 second(s):2...
// for (var index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
// }

// This will print : after 4 second(s):4, after 4 second(s):4...
// The reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure. 
// It remembers the value of i from the last iteration of the loop, which is 4.
// In addition, all three closures created by the for-loop share the same global scope access the same value of i.


// To fix this we can use two methods: IIFE or using let keyword in ES6

// IIFE creates a new scope by declaring a function and immediately execute it.
// for (var index = 1; index <= 3; index++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log('after ' + index + ' second(s):' + index);
//         }, index * 1000);
//     })(index);
// }

// When let keyword is used in the for-loop, it will create a new lexical scope in each iteration.
// In addition, the new lexical scope is chaned up to the previous scope
// so that the previous value of the index is copied from the previous scope to the new one
// for (let index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
// }

// ------------------------------------------------------------//


// x=>x         // λx.x         aka identity function
// x=>y=>y(x)   // λx.λy.y(x)   y applied to x, where y is a function
// x => x(x)    // λx.xx        apply a function x to itself

// The Y combinator 
// Y = λg. (λx. g (x x)) (λx. g (x x))
// const Y = g => (x => g(x(x)))(x => g(x(x)))


const factorial = n => (n===0) ? 1: n*factorial(n-1);
const factorialGen = f => (n=>((n===0)? 1:n*f(n-1))); // Neither recursive nor is it the factorial function
factorialGen(factorial)(5) // factorial-gen(factorial) is equivalent to factorial

const testFunc = n=>n*3; //5*f(4) => 5*4*3 = 60
factorialGen(testFunc)(5)

const factorial_weird = f=>(n=>((n===0)? 1: n*f(f)(n-1)));
factorial_weird(factorial_weird)(5) // factorial-weird(factorial-weird) is equivalent to factorial

const factorial_no_names = (f => (n => ((n === 0) ? 1 : n * f(f)(n - 1))))((f => (n => ((n === 0) ? 1 : n * f(f)(n - 1)))))
factorial_no_names(5)
const arr = [1,2,3,4,5]
arr.map(factorial_no_names)