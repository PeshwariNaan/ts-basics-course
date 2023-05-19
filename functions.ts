function add2(n1: number, n2: number) {
  // Let typescript infer the return type
  return n1 + n2;
}

function printResult2(num: number): void {
  // Void return type
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // Void return type - it says we don't care about the return value/type
  const result = n1 + n2;
  cb(result);
}

printResult2(add2(5, 12));

let combineValues: (a: number, b: number) => number; // Function type
combineValues = add2;
// combineValues = 5 // This will throw an error because combineValues is a function type

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
