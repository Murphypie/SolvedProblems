
const solution = (n) => {
  // Type your solution here 

    // Recursive
    if (n <= 1) return n;
    return solution(n-1) + solution(n-2);
};

solution(5);

const fibonacciArr = [];
//   const primeFib = [];
//   for(let i = 0; i<n; i++){
//       if(fibonacciArr.length === 0 || fibonacciArr.length === 1){
//           fibonacciArr.push(1);
//       }else{
//           fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2]
//            isPrime(fibonacciArr[i]);
//       }
//   }
  
//   function isPrime(num:number, i = 2):number{
//       if(num<2) return 0;
//       if(num === 2) primeFib.push(num)
      
//       if(num % i === 0) return 0;
//       if(i*i > num && num % i !== 0 && primeFib.indexOf(num) < 0) primeFib.push(num);
//       return isPrime(num, ++i);
//   }
  
//   return primeFib;