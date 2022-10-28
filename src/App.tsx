let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

age = "ak";
type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: "kai",
};

let lotsOfPerson: Person[];

role = [2, "KAI"];

let printName: (name: string) => void;

//object in type

//Define the reusable type
type mg = {
  name: string;
  heartSize: number;
};
// instantiate and declare a copy by extending type
let me: mg;
//Define copy, you can chain the above and below
me = { name: "mahmoud", heartSize: 2 };
//use copy
console.log(me);

interface obj {
  name: string;
  heartSize: number | boolean;
}

//type inheritance
type X = {
  a?: string;
  b?: number;
};
type Y = X & {
  c: boolean;
  d: number;
};

let y: Y = {
  c: true,
  d: 3,
};

// interface inheritance
interface objChild extends obj {
  cool: boolean;
}
//inheritance

function App() {
  return <div className="">Hello world</div>;
}

export default App;
