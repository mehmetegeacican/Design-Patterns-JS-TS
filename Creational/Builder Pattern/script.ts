console.log("Hello ts");
// The typescrit file will not work on html since it requires a tsconfig file to be compiled for browsers.
// node js is preffered here

/**
 * Interface
 * The Builder interface specifies methods for creating the different parts of
 * the Product objects.
 */
interface Builder {
  setName(name:string):void;
  setSeats(number:number): void;
  setColor(color:string):void;
  setEngine(engine:string): void;
  setTripComputer(): void;
  setGPS(): void;
}
/**
 * The Builder Class for Car class
 */
class CarBuilder implements Builder {
  //Variables
  private car: Car;
  //Constructor
  constructor() {
    this.car = new Car("");
  }
  //Methods
  /**
   * set method for name
   * @param name the name of the car 
   */
  setName(name: string): void {
      this.car.name = name;
  }
  /**
   * set method for seat number
   * @param {*number} number the number of seats
   */
  setSeats(number: number) {
    this.car.seats = number;
  }
  /**
   * set method for color
   * @param {*string} color the color of the car
   */
  setColor(color: string): void {
      this.car.color = color;
  }
  /**
   * set method for engine
   * @param engine the engine of the car
   */
  setEngine(engine: string) {
    this.car.engine = engine;
  }
  /**
   * Setter method for gps
   */
  setGPS() {
    this.car.gps = false;
  }
  /**
   *
   */
  setTripComputer() {
    this.car.tripComputer = 0;
  }
  /**
   * The get metohd for product
   * @returns {*Car} the car object
   */
  getProductCar() {
    return this.car;
  }
}
/**
 * The Product class
 * The produc class here is the car class
 */
class Car {
  //Variables -- It would be better to do them private for encapsulation -- However for this case, the variables are public
  public name:string;
  public seats: number;
  public color: string;
  public engine: string;
  public gps: any;
  public tripComputer: any;
  //Constructor
  constructor(name) {
    this.name = name;
  }
  //Methods
  public toString() {
    console.log(this.name,this.seats,this.color,this.engine,this.gps,this.tripComputer);
  }
}

/**
 * The director class that works with the builder
 */
class Director{
    //Variables
    private builder:Builder;
    //Constructor
    constructor(){
    }
    //Methods
    public getBuilder(){
        return this.builder;
    }
    public setBuilder(builder:Builder) {
        this.builder = builder;
    }
    /**
     * The method to build minimum viable product
     * @param name the name of the mvp car
     * @param seatNumber the number of seats in the car
     */
    public buildMVP(name:string,seatNumber:number){
        this.builder.setName(name);
        this.builder.setSeats(seatNumber);
    }
    /**
     * This function fully constructs the car object
     * @param name 
     * @param seatNumber 
     * @param color 
     * @param engine 
     */
    public buildFull(name:string,seatNumber:number,color:string,engine:string){
        this.builder.setName(name);
        this.builder.setSeats(seatNumber);
        this.builder.setColor(color);
        this.builder.setEngine(engine);
        this.builder.setGPS();
        this.builder.setTripComputer();
    }
}
/**
 * The client code creates a builder object, passes it to the director and then
 * initiates the construction process. The end result is retrieved from the
 * builder object.
 */
function ClientCode(director:Director){
    //Step 1 -- Create the builder 
    const instanceBuild = new CarBuilder();
    //Step 2 -- Pass the builder to the director to use
    director.setBuilder(instanceBuild);
    //Step 3 - Initiate the construction process
    console.log("MVP Construction");
    //Trials -- Build a polo car
    director.buildMVP("Polo",4);
    //To string
    console.log("***********************");
    instanceBuild.getProductCar().toString();
    console.log("***********************");
    //Setting the color
    console.log("Painting the Car to red");
    console.log("************************");
    instanceBuild.setColor("Red");
    instanceBuild.getProductCar().toString();
    console.log("************************");
    console.log("Full Construction");
    director.buildFull("Polo",4,"White","1.0");
    instanceBuild.getProductCar().toString();
    console.log("************************");
}

//The main method
const director = new Director();
ClientCode(director);

