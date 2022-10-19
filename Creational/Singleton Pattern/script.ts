console.log("Hello ts");
console.log("Singleton Pattern example");
console.log("-----------------------");
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
  //Variables
  //instance the instance of the Singleton object
  private static instance: Singleton;

  //Constructor
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  //Methods
  /**
   * The method that returns the instance
   * @returns instance the Singleton instance
   */
  public static getInstance(){
    if(!Singleton.instance){
        Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

/**
 * Function for Singleton
 */
function testSingleton(){

    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    if(s1 === s2){
        console.log("The singleton design pattern works. Both variables contain the same instance");
    }
    else{
        console.log("The singleton does not work. Variables are different");
    }
}

testSingleton();
