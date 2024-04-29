//functions in java script 
console.log("lines for function file------>");
//function defination
function sum(k,l){
    console.log(k+l);
}
sum(10,20)

//function experssions
 function lit(a,b){
    console.log(a+b)
 }
 const exp=lit(10,20);
 exp;

//return keyboard 

function qwe(q,w){
return q+w
}
const experssions=qwe(10,20);
console.log('the summ is ${experssion}');

//anonymous function

let sumof=function(s,o){
    return s+o
}
const trx=sumof(10,20);
const trxOne=sumof(20,30);
console.log(trx,trxOne>trx);

//Default Parameter
function first(a,b=6){
    console.log(a+b)
}
first(10)
first(10,30)

//Fat arrow function
const fat=(r,f)=>{
    return r+f
}
console.log(fat(5,6))


//Function inside function
function hello(){
    const addTwoNumber=()=>{
        console.log(5+6)
    }
    const multiply=(h,j=4)=>{
    console.log(h*j)
}
console.log("hello world")
addTwoNumber();
multiply(5)
}

//lexical scope
let myAge=22
function getMyAge(){
    let myName="Shreyansh Agarwal";
    function getMyNameAndAge(){
        let myGender="male";
        console.log(myGender,myName,myAge);
    }
    getMyNameAndAge();
    console.log(myName,myAge);
}
getMyAge();
console.log(myAge);

//Hoisting
host();
function host(){
    console.log(5+6)
}
// const host=()=>{
//     console.log(5+6)
// }
// host();

//forEach
let method=[3,4,5,6]
function multiply(number,index){
    console.log(`index is:${index} and number is ${number}`);
    console.log(`${number}*2=${number*2}`)
}
multiply(a[0],0);
multiply(a[1],1);
//for loop
for(let i=0;i<a.length;i++){
console.log(`${a[i]}*2=${a[i]*2}`)
}


//forEach
console.log("for each....>")
method.forEach(multiply);
method.forEach((number,index)=>{
    console.log(`index is:${index} and number is ${number}`);
    console.log(`${number}*2=${number*2}`)
})
method.forEach((number)=>{
    console.log(`${number}*2=${number*2}`)
})


//indexOf
let users=["ram","shyam","ravi","yogesh","shyam"];
console.log(users.indexOf("shyam"));
console.log(users.indexOf("shyam",3));
console.log(users.lastIndexOf("ravi"));
console.log(users.indexOf("jay"));//no match available, it returns -1

//LastIndexOf
console.log(users.lastIndexOf("shyam"));
console.log(users.lastIndexOf("shyam",3));
console.log(users.lastIndexOf("ravi"));

//includes
console.log(users.includes("ravi"));
console.log(users.includes("Ravi"));

//map
let x=[2,4,6,8,10]
let y=x.map((element,index)=>{
    return element>6 ? element:0
})
let z=x.map((element,index)=>{
    return `${index}:${element}`
})
console.log(x,y,z);

//filter
let xt=[
    {name:"rakesh",age:22},
    {name:"ravi",age:16},
    {name:"vishnu",age:18},
    {name:"om",age:21},
]
const filterAge=xt.filter((element)=>element.age>18)
console.log(filterAge);

//reduce
let hyper=[2,4,5,10,15]
let hyperx = hyper.reduce((acc,ele)=>{
    return acc += ele
}, 0)
let hyperxc=hyper.reduce((acc,ele)=>{
    return acc*=ele
},1)

console.log('wow', hyper,hyperx, hyperxc);


//sort
let Perday=["mon","sun","tue","thrus"]
console.log(Perday.sort());

let Perday2=[400,8,12,100000]
console.log(Perday2);
console.log(Perday2.sort())

Perday2.sort((x,y)=>x-y)
console.log(Perday2);
Perday2.sort((x,y)=>y-x)
console.log(Perday2);

let Perday3=[2,1,1000,21,12]
console.log(Perday3);
console.log(Perday3.sort());

Perday3.sort((x,y)=>x-y)
console.log(Perday3);
Perday3.sort((x,y)=>y-x)
console.log(Perday3);

//example of forEach,map,reduce
  
let cello=[1,2,3,4,5]
cello.forEach((v)=> {
    console.log(v+5)
})

let puro=cello.map((v)=>{
    return v+5
})
console.log(puro);

let expert= puro.filter((v)=> v>8)
console.log(expert);

let sports=cello.reduce((acc,v)=>{
    acc+=v
    return acc
},50)
console.log(sports);

let longarr=[20,50,100,200,250,500]
 const checkElement=longarr.find((ele,index)=>{
    return ele>200
 })
console.log(checkElement);

const doc=[
    {name:"Akash",age:26},
    {name:"shreyansh",age:22},
    {name:"akshat",age:23},
    {name:"ram",age:25},
]




//Question 2 practice
// let gameNum=25;
// let userNum=prompt("Guess the game number:");
// while(userNum!=gameNum){
//     userNum=prompt("You entered wrong number.Guess again:");
// }
// console.log("Congratulations,you entered the right number :)");