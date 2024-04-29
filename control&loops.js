
console.log("control statment ----->")
// for i=4
  //do while loop 
  var i=1;
  do
  {
    if(i%4==0)
    {
        console.log(i);
    }
    i++;
  }while(i<41)

  //while loop
  var i=1;
  while(i<41)
  {
    if(i%4==0)
    {
        console.log(i);
    }
    i++;
  }

  //for loop 
  for( i=1;i<41;i++)
  {
   if(i%4==0)
    {
        console.log(i);
    }
  }

   // for a=6
  //do while loop 
  var a=1;
  do{
    if(a%6==0)
    {
      console.log(a);
    }
    a++;
  }while(a<61)

  //while loop 
  var a=1;
  while(a<61)
  {
    if(a%6==0)
    {
      console.log(a);
    }
    a++;
  }

  //for loop
for(a=1;a<61;a++)
{
  if(a%6==0)
  {
    console.log(a);
  }
}

// for b=7 
//do while loop
var b=1;
do{
  if(b%7==0)
  {
    console.log(b);
  }
  b++;
}while(b<71)

//while loop 
var b=1;
while(b<71)
{
  if(b%7==0)
  {
    console.log(b);
  }
  b++;
}

//for loop
for(b=1;b<71;b++)
{
if(b%7==0)
{
  console.log(b);
}
}

//.....
  //if condition
  let age=26;
  if(age>=18)
  {
    console.log("user can apply for voter ID card");
  }

  let num=6;
  if(num%2===0)
  {
    console.log("The reminder is 0")
  }

  //if-else statement 
  let age1=18;
  if(age1>=18)
  {
    console.log("user can apply for voter ID card");
  }
  else{
    console.log("user can not apply for voter ID card");
  }

  let number=8;
  if(num%2===0)
  {
    console.log("The reminder is 0");
  }  
  else{
    console.log("The reminder is greater then 0");
  }

//falsy values
let firstname="";
  if(firstname)
  {
    console.log(firstname);
  }  
  else{
    console.log("firstname is empty");
  }

  // ternary operator 
  let newage=18;
  let result="";

  if(newage>=18)
  {
    result="user can apply for voter ID card"
  }
  else{
    result="user can not apply for voter ID card"
  }

  let age2=18;
  let resultx=age2>=18 ?"user can apply for voter ID card" : "user can not apply for voter ID card"

    //switch statement

  let day=0;
  switch(day)
  {
    case 0:
      console.log("monday");
      break;
      case 1:
        console.log("tuesday");
        break;
        case 2:
          console.log("wednesday");
          break;
          case 3:
            console.log("thrusday");
            break;
            case 4:
              console.log("friday");
              break;
              case 5:
                console.log("saturday");
                break;
                case 6:
                  console.log("sunday");
                  break;
              default:
                console.log("Wrong Number");
    }


// Nested if -else statement //
 let temperature =33;
 if(temperature<16){
  console.log("cold is outside");
 }else{
  if(temperature<24){
     console.log("whether is normal");
  }else{
      console.log("hot is outside");
  }
 }

 //if else-if else-if else statment //
 let newtemperature=33;
 if(temperature<16){
  console.log("cold is outside");
 }else if(temperature<24){
    console.log("whether is normal")
 }else if(temperature>33){
  console.log("extremely hot is outside");
 }else{
  console.log("hot is outside")
 }

//break//
for (let num=1; num<=10; num++){
  if(num===4){
    break;
  }
  console.log(num);
}

//continue//
for(let num=1; num<=10; num++){
  if(num===4){
    continue;
  }
  console.log(num);
}