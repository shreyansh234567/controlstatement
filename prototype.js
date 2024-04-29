function createUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18=function(){
        return this.age>=18;
    }
    return user;
}

const user1=createUser('Ravi','Sharma','ravi@gmail.com',19,"myaddress");
console.log(user1);
const is18=user1.is18();
const about=user1.about();
console.log(about);

function createUser(firstName,lastName,email,age,address){const userMethods={
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age>=18;
    }
}
  


 const user={};
 user.firstName=firstName;
 user.lastNam=lastName;
 user.email=email;
 user.age=age;
user.address=address;
user.about=userMethods.about;
user.is18=userMethods.is18;
return user;
}

const userR =createUser('Rahul','Verma','rahul@gmail.com',9,'myaddress');
const user2 =createUser('rohit','yadav','rohit@gmail.com',19,"myaddress");
const user3 =createUser('mohit','singh','mohit@gmail.com',17,"myaddress");
console.log(user1.about());
console.log(user3.about());

const obj1={
    key1:"value1",
    key2:"value2"
}

//__proto__,[[Prototype]]

const obj2=Object.create(obj1);
obj2.key3="value3";
console.log(obj2);
console.log(obj2.__proto__);


const usermethods={
    about : function(){
        return `${this.firstname} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age>=18;
    },
    sing : function(){
        return 'toon na na na la la';
    } 
}

function CreateUser(firstName,lastName,email,age,address){
    const user=Object.create(userMethods);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}

const userG=createUser('Rahul','Verma','rahul@gmail.com',9,"my address");
const userX=createUser('rohit','yadav','rohit@gmail.com',19,"myaddress");
const userY=createUser('mohit','singh','mohit@gmail.com',17,"my address");
console.log(user1);
console.log(user1.about());


