//#1
// const person: {  //We can do it this way but its better to let TS infer the type
//   name: string;
//   age: number;
// } = {
//     name: 'Todd',
//     age: 27,
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //Tupple type - fixed length array (union type)
// } = {
//   //TS will infer the type based on the value assigned to the variable if we don't specify it
//   name: 'Todd',
//   age: 27,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'], //Tupple type - fixed length array (union type)
// };

// person.role.push('admin'); // TS doesn't catch this error, it is allowed.

//ENUMS example

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Todd',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favoriteActivities: string[]; //WE can do this to tell TS what should be in the array

for (const hobby of person.hobbies) {
  //TS knows hobbies is an array of strings
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
  //TS knows that hobby is a string so it doesn't have a map method
}

console.log(person.name);

//Object types can also be nested
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};
