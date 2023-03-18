// Higher-Order Functions
// A Higher-Order function is a function that receives a function as an argument or returns the function as output.
// const multiply = (multiplier)=>(multiplicand)=>multiplicand*multiplier
// const product = multiply(3)(4);
// console.log(product) // 12

// const multiply = (multiplier) => {
//     return (multiplicand) => {
//       return multiplicand * multiplier;
//     };
//   };
  
//   const timesThree = multiply(3); 
//   const product = timesThree(4); 


// Higher-Order Components
// Higher-Order Components take any React component as input component and return an enhanced version of it as output component

// const withConditionalFeedback = (Component) => (props) => {
//     if (props.isLoading) return <div>Loading data.</div>;
//     if (!props.data) return <div>No data loaded yet.</div>;
//     if (!props.data.length) return <div>Data is empty.</div>;
  
//     return <Component {...props} />;
//   };
  
//   const App = () => {
//     const { data, isLoading } = fetchData();
  
//     return <TodoList data={data} isLoading={isLoading} />;
//   };
  
//   const BaseTodoList = ({ data }) => {
//     return (
//       <ul>
//         {data.map((item) => (
//           <TodoItem key={item.id} item={item} />
//         ))}
//       </ul>
//     );
//   };
  
//   const TodoList = withConditionalFeedback(BaseTodoList);




// Immediately Invoked Function Expression (IIFE)
// In Javascript, there are a multiple types of expressions: number, string, boolean, function, or simple like 1+2

'This is a string';
(10+20);

// As you can see, you can put an expression in parenthesis. If you do that to a function, it acts as IIFE.
// A function expression in parenthesis, (function() { /* code */ }), creates an anonymous function

let sum = (function(a,b){
    return a + b;
})(10, 20);

//console.log(sum) // 30




// IIFE starting with a semicolon (;)
;(function() {
    /* */
    })();

//In this syntax, the semicolon is used to terminate the statement 
// in case two or more JavaScript files are blindly concatenated into a single file.


// For example, you may have two file lib1.js and lib2.js which use IIFEs:
(function(){
    // ...
})()


(function(){
    // ...
})()

//If you use a code bundler tool to concatenate code from both files into a single file, 
// without the semicolon (;) the concatenated JavaScript code will cause a syntax error.




