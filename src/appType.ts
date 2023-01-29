const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// type unknown

let some: unknown;

some = "string";
some = 10;

let str: number;

if (typeof some === "number") {
  str = some;
}

// type Tuple

let fixed: [string, number, boolean];

fixed = ["qwert", 10, false];

// type Enum

enum Load {
  LOADING,
  READY,
}

const page = {
  load: Load.READY,
};
if (page.load === Load.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
  console.log("Сторінка завантажена");
}

// Union Type

function combine(param1: string | number, param2: string | number) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  return param1.toString() + param2.toString();
}

// LIteral Type

function greeting(action: "hello" | "bye") {
  if (action === "hello") {
    console.log("hello user");
  }
  console.log("bye user");
}

const fruit: string[] = [];

function workWithArr(arr: string[], value: string, action: "add" | "delete") {
  if (action === "add") {
    arr.push(value);
  } else {
    const index = arr.indexOf(value);
    arr.splice(index, 1);
  }
  return arr;
}

workWithArr(fruit, "apple", "add");
workWithArr(fruit, "cherry", "add");
workWithArr(fruit, "tomato", "add");
workWithArr(fruit, "apple", "delete");

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

// Custom types dcwedfeewfwef

type Person = {
  name: string;
  age?: number;
  showName: () => void;
};

const person1: Person = {
  name: "Alex",
  age: 25,
  showName() {
    console.log(this.name);
  },
};
person1.showName();
