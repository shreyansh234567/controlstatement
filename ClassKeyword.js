class CreateUser{
    construction(firstName,lastName,email,age,address){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){
        return`${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return "la la la la";
    }
}
 const user1=new CreateUser('Rahul','Verma','rahul@gmail.com',9,"my address");
 const user2=new CreateUser('rohit','yadav','rohit@gmail.com',19,"my address");
 const user3=new createUser('mohit','singh','mohit@gmail.com',17,"my address");

 class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat() {
        return`${this.name} is eating`;
    }
    isSuperCute(){
    return this.age <=1;
}
isCute(){
    return true;
}
}
class Dog extends Animal

