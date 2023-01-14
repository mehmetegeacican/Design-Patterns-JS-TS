
abstract class Car {
    public description:string;

    public getDescription():string {
        return this.description;
    }

    public abstract cost():number;
}

abstract class CarOptions extends Car {
    decoratedCar:Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class ModelS extends Car{
    public description:string = "Model S";

    public cost():number {
        return 70000;
    }
}

class ModelX extends Car{
    public description:string = "Model X";
    public cost():number {
        return 77000;
    }
}

class EnhanceAutoPilot extends CarOptions {
    decoratedCar: Car;

    constructor(car:Car){
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
       return this.decoratedCar.getDescription() + ", Enhanced Autopilot";
    }
    public cost(): number {
        return this.decoratedCar.cost() + 3000;
    }
    
}

class WideScreenFront extends CarOptions {
    decoratedCar: Car;

    constructor(car:Car){
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
       return this.decoratedCar.getDescription() + ", Wide Screen Front";
    }
    public cost(): number {
        return this.decoratedCar.cost() + 2000;
    }
    
}

function clientCode(){
    let tesla = new ModelS();
    tesla = new WideScreenFront(tesla);
    console.log(tesla.getDescription());
    console.log(tesla.cost());
    tesla = new EnhanceAutoPilot(tesla);
    console.log("After Decoration---->");
    console.log(tesla.getDescription());
    console.log(tesla.cost());
}

clientCode();

