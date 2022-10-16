class Adress {
    constructor(zip,street){
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name,age,phone,address){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}
/**
 * The User builder class
 */
class UserBuilder{
    /**
     * Constructor takes only one parameter
     * Creates a user in the constructor
     * the others are dynamically added with set Methods
     * @param name the name 
     */
    constructor(name){
        this.user = new User(name);
    }
    /**
     * adds the age attribute to the user
     * @param  age 
     * @returns the user 
     */
    setBuildAge(age){
        this.user.age = age;
        return this;
    }
    /**
     * adds the phone parameter
     * @param phone the phone  
     * @returns the user
     */
    setBuildPhone(phone){
        this.user.phone = phone;
        return this;
    }
    /**
     * adds address parameter
     * @param address the address of the user
     * @returns the user 
     */
    setBuildAddress(address){
        this.user.address = address;
        return this;
    }

    /**
     * the build function
     */
    build(){
        return this.user;
    }
}
//What are you going to do when you have 20 parameters and not all of them are defined?
// You need to put only several of the 
//The builder pattern is used for solving this problem
console.log("*******************");
console.log("Without pattern")
const user = new User("Bob",undefined,undefined,new Adress('1','main street'));
console.log(user);
console.log("******************");
console.log("With pattern");
let userBuilder = new UserBuilder("Stacy");
let buildedUser = userBuilder.build();
console.log(buildedUser);
console.log("Starts using the build pattern");
//You need to use the builder class in order to build of course
buildedUser = userBuilder.setBuildAge(20).build();
buildedUser = userBuilder.setBuildPhone("0533 324 24 24").build();
buildedUser = userBuilder.setBuildAddress(new Adress('1','main street')).build();
console.log(buildedUser);
console.log("***********************");
