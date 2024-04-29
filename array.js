//Array//
let months=["jan","feb","mar"];
console.log(months);
console.log(months[0]);
let mixArray=[1,2,3,"Ramesh","Suresh",true,null];
console.log(mixArray);

mixArray[3]="Ram";
console.log(mixArray);
console.log(typeof mixArray);

//Array.isArray//
let monthsx=["jan","feb","mar"];
console.log(Array.isArray(months));

//Push//
let month=["jan","feb","mar"];
month.push("apr");
console.log(month);

//Pop//
month.pop();
console.log(month.pop());
console.log(month);

//Unshift//
month.unshift("apr");
console.log(month);

//Shift//
month.shift();
console.log(month.shift());
console.log(month);

//Premetive//
let num1=10;
let num2=num1;
console.log(num1);
console.log(num2);
num1++;
console.log(num1);
console.log(num2);

//Reference//
let months1=["jan","feb","mar"];
let months2=months1;
console.log(months1);
console.log(months2);
months1.push("apr");
console.log(months1);
console.log(months2);

//clone array//
// 1.create new array 
let months6=["jan","feb","mar"];
let months7=["jan","feb","mar"];
months6.push("apr");
console.log(months6);
console.log(months7);
 // 2.lice method 
  let months8=["jan","feb","mar"];
  let months9=months8.slice(0);
  months8.push("apr");
  console.log(months8);
  console.log(months9);
  // 3.concate method
  let months4=["jan","feb","mar"];
  let months5=[].concat(months4);
  months4.push("apr");
  console.log("abcd")
  console.log(months4);
  console.log(months5);
  // 4.spread operator
  let monthsY=["jan","feb","mar"];
  let monthsZ=[...monthsY,"apr","june"];
  monthsY.push("apr");
  console.log(monthsY);
  console.log(monthsZ);

//length
console.log(monthsY.length);

//For loop in array--
let months0=["jan","feb","mar"];
let i=0;
while(i<months0.lengths){
  console.log(months0[i]);
  i++;
}

//For in loop in array--
let months11=["jan","feb","mar"];
for(let i in months11){
  console.log(i);
  console.log(months11[i]);
}

//Array destructuring--
 let months12=["jan","feb","mar"];
 let firstMonth1=months12[0];
 let secondMonth1=months12[1];
 console.log(firstMonth1,secondMonth1);

 let [firstMonth2,secondMonth2]=months12;
 let [firstMonth, , thirdMonth]=months12;
 let newArray=months12.slice(2);
 let [firstmonth, secondMonth,...allMonths12]=months12;
 console.log(newArray);