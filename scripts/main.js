// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  // Return a new array with the strings filtered out
  
  return l.filter(function(x) {return typeof x == 'number'})
}


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