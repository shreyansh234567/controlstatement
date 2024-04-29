  //OBJECTS
  console.log("lines for object files----->")
  const obj={name:"Shreyansh",gender:"male",hobbies:["playing cricket","reading books"]}
  console.log(obj);
  console.log(typeof obj);
  
  // access data from object
  
  //dot notation
  console.log(obj.name);
  console.log(obj.gender);
  console.log(obj.hobbies);
  
  //bracket notation
  console.log(obj["name"]);
  console.log(obj["gender"]); 
  console.log(obj["hobbies"])
  
  //add a key value pair to an object 
  
  //dot notation 
  obj.age=26;
  console.log(obj);
  
  //bracket notation 
  obj["age"]=26;
  console.log(obj); 

  obj["person hobbies"]=["one","two"];

  const key="email";
  obj[key]="test@gmail.com";
  
  //sprad operator in object
  let obj1={key1:"value",key2:"value2"}
  let obj2={key1:"value9",key3:"value3"}

  let newObj={...obj1,...obj2}
  let sameObj={...obj2,obj1,key3:"value8"}
  console.log(obj1);
  console.log(obj2);
  console.log(newObj);
  console.log(sameObj);

  //object destructure
let obj3={key1:"Value1",key2:"Value2",key3:"Value3"}

let namme=obj3.key1;
let check=obj3.key2;
const {key1,key2}=obj3;
console.log(key1,key2);
const {key1:key56,key2:key78,...restkeys}=obj3;
console.log(key56,key78,restkeys);

//object inside array
let arr=[
  {id:1,name:"ram",gender:"male",rank:"A"},
  {id:2,name:"shyam",gender:"male",rank:"B"},
  {id:3,name:"ravi",gender:"male",rank:"C"},
];
for (let element of arr){
  console.log(element.name)
  console.log(element.gender)
  console.log(element.rank)
}
const [user1,user2,user3]=arr;
console.log(user1,user2,user3);

const [{name}, ,{gender}]=arr
console.log(name,gender);
const [{name:userName,id}, ,{gender:userGender}]=arr
console.log(userName,id,gender);