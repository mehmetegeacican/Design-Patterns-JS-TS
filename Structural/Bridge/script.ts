
const PI = 3.14;


/**
 * The Implementation defines the interface for all implementation classes. It
 * doesn't have to match the Abstraction's interface. In fact, the two
 * interfaces can be entirely different. Typically the Implementation interface
 * provides only primitive operations, while the Abstraction defines higher-
 * level operations based on those primitives.
 */
interface Color {
    displayColor():string;
}
/**
 * Another Implementation
 */
interface Shape {
    calculateArea():string;
}

/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */
class Red implements Color {
    displayColor(): string {
       return "Red";
    }
}

class Blue implements Color {
    displayColor(): string {
        return "Blue";
    }
}
/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 */
class Rectangle implements Shape {
    //Variable
    protected color: Color;
    //It would be better if these were private, but for now it is not important
    public x:number;
    public y:number;
    //Constructor
    constructor(color: Color,x:number,y:number){
        this.color = color;
        this.x = x;
        this.y = y;
    }
    //Method
    public calculateArea():string {
        const area = this.x*this.y;
        return "The Area of this" +  this.color.displayColor() + " rectangle is " + area + "\n";
    }
}
/**
 * Another Abstraction
 */
class Circle implements Shape {
    //Variables
    protected color:Color;
    public r: number;
    //Constructors
    constructor(color:Color,r:number){
        this.color = color;
        this.r = r;
    }
    //Methods
    calculateArea(): string {
       const area = PI*(this.r*this.r);
       return "The Area of this " + this.color.displayColor() + " circle is " + area + "\n";
    }
}

/**
 * The Client Code
 */
function clientCode(shape:Shape){
    console.log(shape.calculateArea());
}
//Colors
const red = new Red()
const blue = new Blue();
//Shapes
const redRectangle = new Rectangle(red,5,4);
const blueCircle = new Circle(blue,3);
//Functons
clientCode(redRectangle);
clientCode(blueCircle);