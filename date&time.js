new Date();
// const date = new Date(year, month)
// new Date(milliseconds);

const date = new Date();
console.log(date);
console.log(new Date());
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());
console.log(Date.now());

console.log(new Date(2023,10,6,2,23,45,0).toLocaleString());
console.log(new Date(2023).toLocaleString());
console.log(new Date(6).toLocaleString());
console.log(new Date("November 6,2023 10:00:45"))
console.log(new Date("November 6,2023 10:00:45").toLocaleString());

let d=Date.now()
console.log(new Date(d).toLocaleString());

//Dates Mathod-->
let date1=new Date()
console.log(date.toLocaleString())
console.log(date.getFullYear())
console.log(date.getMonths())
console.log(date.getDate())
console.log(date.getDay())

console.log(date.setFullYear(2023,10,6))
console.log(date.setMonths(10))
console.log(date.setDate(6))


//Time Method-->
console.log(date.getTime())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSecondes())
console.log(date.getMilliseconds())


//some extra methods-->
consoler.log(new Date().toLocaleTimeString())
console.log(new Date().toLocaleDateString())
console.log(new Date().toLocaleString())