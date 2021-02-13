// Hello, object Task

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness Task

let schedule = {};
function isEmpty(obj) {
  // if the object is containing anything it will enter the loop
  // and return false
  for (let key in obj) {
    return false;
  }
  // if it doesn't contain anything it will not enter the loop
  // and return false
  return true;
}

alert(isEmpty(schedule)); // the object is empty so it will return - true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // the object isn't empty so it will return - false

// Sum object properties Task

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
function salariesSum(obj) {
  for (const key in obj) {
    sum += obj[key];
  }
  console.log(sum);
}
salariesSum(salaries);

// Multiply numeric property values by 2 Task
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (const key in obj) {
    console.log(typeof obj[key]);
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  console.log(menu);
}
multiplyNumeric(menu);

//
