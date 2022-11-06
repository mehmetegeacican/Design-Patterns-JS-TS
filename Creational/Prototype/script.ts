console.log("Prototype Pattern");
console.log("----------------\n");

class Shape{
    x:number;
    y:number;
    color:string;

    constructor(x:number,y:number,color:string){
        this.x = x;
        this.y = y;
        this.color = color;
    }

    clone():this{
        const clone = Object.create(this);
        return clone;
    }
}

class Rectangle extends Shape {

    area:number;
    constructor(source:Shape){
        super(source.x,source.y,source.color);
        this.area = this.getArea();
    }
    getArea():number{
        return this.x * this.y;
    }

    
}

function clientCode(){
    const shape = new Shape(5,5,"Red");
    const rectangle = new Rectangle(shape);
    rectangle.color = "Blue";
    const rectangleClone = rectangle.clone();
    console.log(rectangle,rectangleClone);
    console.log("Original Values ------- >");
    console.log(rectangle.x,rectangle.y,rectangle.color);
    console.log("Clone Values ------- >");
    console.log(rectangleClone.x,rectangleClone.y,rectangleClone.color);
    
}

clientCode();