// 1. Get the input date tag.
// 2.And get the value, then convert it to to Real numbers or Integers

if (typeof document !== "undefined") {
    let date = document.querySelector("#date");
    const today = new Date().toISOString().split("T")[0];
    date.setAttribute("max", today);
}

// 4. Calculating the age - Current Date - Birth Date..
let calculateAge = () => {
  let birthdate = new Date(date.value);
//   console.log(birthdate);
let usersFirstDate = birthdate.getDate();
let usersFirstMonth = birthdate.getMonth() + 1;
let usersFirstYear = birthdate.getFullYear();

let today = new Date();

let todaysDate = today.getDate();
let todaysMonth = today.getMonth() + 1;
let todaysYear = today.getFullYear();

let dayDifference, monthDifference, yearDifference;

yearDifference = todaysYear - usersFirstYear;

if(todaysMonth >= usersFirstMonth){
    monthDifference = todaysMonth - usersFirstMonth;
    
}else{
    // converting the full year back into months, avoiding the negative result of month
    yearDifference--;
    monthDifference = 12 + todaysMonth - usersFirstMonth;
}

if(todaysDate >= usersFirstDate){
    dayDifference = todaysDate - usersFirstDate;
}else{
    // if not true, calculate the exact nunber of days in that particular month--- write a function that calculate that.  

    monthDifference--

    dayDifference = (daysInMonth(usersFirstMonth, usersFirstYear) + todaysDate) - usersFirstDate;
}
// if the month becomes negative 
if(monthDifference < 0){
    monthDifference = 11;
    yearDifference--;
}

let result = document.querySelector('.results');

if(!date.value){
    result.textContent = "";
}else{
    result.append(`${yearDifference} years, ${monthDifference} months & ${dayDifference} days old`)
}



};
calculateAge();






// number of days in a month.
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
// dayDifference = todaysDate - usersFirstDate;


// 3.Remove the user to pick a date that will be in the future.

// Problem: Because of my backend practicing with the node.js i must write all my script in an if satement to override the issue.
