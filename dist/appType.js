"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let some;
some = "string";
some = 10;
let str;
if (typeof some === "number") {
    str = some;
}
let fixed;
fixed = ["qwert", 10, false];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
const page = {
    load: Load.READY,
};
if (page.load === Load.LOADING) {
    console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
    console.log("Сторінка завантажена");
}
function combine(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    return param1.toString() + param2.toString();
}
function greeting(action) {
    if (action === "hello") {
        console.log("hello user");
    }
    console.log("bye user");
}
const fruit = [];
function workWithArr(arr, value, action) {
    if (action === "add") {
        arr.push(value);
    }
    else {
        const index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
workWithArr(fruit, "apple", "add");
workWithArr(fruit, "cherry", "add");
workWithArr(fruit, "tomato", "add");
workWithArr(fruit, "apple", "delete");
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
const person1 = {
    name: "Alex",
    age: 25,
    showName() {
        console.log(this.name);
    },
};
person1.showName();
//# sourceMappingURL=appType.js.map