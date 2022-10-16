class Adress {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  /**
   * One of the easy ways to create a javacsript objects that takes parameters dynamically
   * is to pass them as json objects or js objects at the end
   * ıf no parameters are in the optional js , pass an empty object
   * Notice that if i want to adjust the default value of a parameter, i can easily do it in the parameter section
   */
  constructor(name, { age, phone = "111 11 11 11", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}
console.log("*********************");
console.log("Builder pattern with the json object version");
let user = new User('Bob',{age:10,address: new Adress('1','main')});
let user2 = new User('Jane',{age:10,phone:"123 45 678",address: new Adress('1','main')});
console.log(user,"-",user2);
console.log("********************");
