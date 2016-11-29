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

// #6

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer. 

function getAverageAge(arr) {
  var totalAge =0;
  for(var i=0;i<arr.length;i++){
    totalAge += arr[i].age;
  }
  return Math.round(totalAge/arr.length);

}


// another way to solve 

function getAverageAge(list) {
  return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);

}

  // ======================

   // add up all the whole numbers from 1 through a given number n.
   // verify that n is a valid positive integer number. If not, please, return false

function f(n){
  if (Number.isInteger(n) && n > 0) {
    var output = 0;
    for (var i = 0; i <= n; i = i + 1) {
      output += i;
    }
    return output;
  } else { 
    return false;
  }
};
// ==============
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  arr.sort(function(a,b) {return a - b});
  return [arr[0], arr[arr.length - 1]]; // fix me!
}


// ==================
// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, 
// return the middle 2 characters.

function getMiddle(s)
{
  var midOfS = 0;
  var midOfSOdd = 0;
  var evenOrOdd = s.length;
  if (evenOrOdd % 2 == 0) {
    midOfS = evenOrOdd / 2 - 1;
    var mySlice = s.slice(midOfS, (midOfS +2));
    return mySlice;
  }
  else {
    midOfSOdd = evenOrOdd/2;
    var mySliceOdd = s.slice(midOfSOdd, (midOfSOdd +1));

    return mySliceOdd;
  }
}
  // ==================

//   Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 
//   Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, 
//   he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, 
// which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

// ===================

// Create a function with two arguments that will return a list of length (n) with multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

// make two functions, max and min (maximum and minimum in PHP)
//  that take a(n) array/vector of integers list as input and outputs, respectively, 
//  the largest and lowest number in that array/vector.

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

// Complete the function so that it finds the mean of the three scores 
// passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  // Code here
  var gradeAverage = (s1+s2+s3) / 3;
  
  if(gradeAverage >= 90 && gradeAverage <=100){
    return 'A';
  
  } else if(gradeAverage >= 80 && gradeAverage <90){
    return 'B';
  } else if(gradeAverage >= 70 && gradeAverage <80){
    return 'C';
  } else if(gradeAverage >= 60 && gradeAverage <70){
    return 'D';
  } else if(gradeAverage >=0 && gradeAverage < 60){
    return "F";
  }
};

// ===========================
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

function towerBuilder(nFloors) {
  // build here
  let tower = [];
  let repeated;
  let spaces;
  let row;
  for (let x = nFloors; x > 0; x--) {
    repeated = '*'.repeat(x*2 - 1);
    spaces = ' '.repeat(nFloors - x);
    row = spaces.concat(repeated,spaces);
    tower.unshift(row)
  }
  return tower;
}
// =================

// x Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}

