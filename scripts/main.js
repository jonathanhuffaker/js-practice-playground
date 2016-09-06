// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  // Return a new array with the strings filtered out
  
  return l.filter(function(x) {return typeof x == 'number'})
}
// =============================
// #2

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with '£' (JS and Java) or '$' (C#, C++, Ruby, Clojure, Elixir, PHP and Python).



function bonusTime(salary, bonus) {
// your code here
  var employeeSalary = salary;
  var boolBonus= bonus;
  
  if(bonus === true){
    employeeSalary = (salary * 10);
  }
  else if(bonus === false){
    employeeSalary = salary;
  
  }
  return '£' + employeeSalary;
}

// ===========================

// Combine strings function
// Create a function named combineNames(combine_names in python, ruby) that accepts two parameters (first and last name). The function should return the full name.

function combineNames(firstName, lastName){
  var combinedParams = firstName + " " + lastName;
  
  return combinedParams;
}

// ====================
// #3
// Enough is enough!

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, 
// and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, 
// since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. 
// He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task

// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example

//   deleteNth ([1,1,1,1],2) // return [1,1]

//   deleteNth ([20,37,20,21],1) // return [20,37,21]

function deleteNth(arr,x){
  // ...
  if (!arr) { return null; }
  if (x < 1) { return []; }
    
  var result = [];
  var itemCounts = {};
  for (var i= 0; i< arr.length; i++){
    var item = arr[i];
    var count = itemCounts[item] || 0;
     if (count < x) {
       result.push(item);
       itemCounts[item] = count + 1;
     }
    }
    
    return result;
}
// =======================
// 4.  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

Below was not my solution but on of the clever solutions from someone else that solved

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}


// another option 

function validatePIN (pin) {
  
  var pinlength = pin.length;
  var isFourOrSix = (pinlength == 4 || pinlength == 6);
  var numbersOnly = pin.match(/^\d+$/);
    
  if(isFourOrSix && numbersOnly){
    return true;
  }
  
  return false;

}

// ============================
// #5
// In this kata you will create a function that takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.



function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function(x) {
    return typeof x === 'number';
  });
}

// ============