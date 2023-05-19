type Combinable = number | string; //Type alias - we can use this instead of union types - just looks a little cleaner
type ConversionDescriptor = 'as-number' | 'as-text'; //Type alias with literal type

//Union types - 2 different types of values
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: 'as-number' | 'as-text' //Literal type combined with union type
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2; //Doing the conversion before the return statement
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultConversion === 'as-number') {
  //     return +result; // + converts a string to a number or we can use parseFloat()
  //   } else {
  //     return result.toString();
  //   }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

//Literal types - specific values

type Product = { title: string; price: number };
const p1: Product = { title: 'A Book', price: 12.99 }; // Cannot add another property to this object, it yells at you.
