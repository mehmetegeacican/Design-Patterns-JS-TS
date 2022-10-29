

/**
 * The Abstract Factory interface declares a set of methods that return
 * different abstract products. These products are called a family and are
 * related by a high-level theme or concept. Products of one family are usually
 * able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of
 * another.
 */
interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable,
  createSofa():Sofa
}

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair;
  }
  createCoffeeTable(): CoffeeTable {
      return new VictorianCoffeeTable;
  }
  createSofa(): Sofa {
      return new VictorianSofa;
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair;
  }
  createCoffeeTable(): CoffeeTable {
      return new ModernCoffeeTable;
  }
  createSofa(): Sofa {
      return new ModernSofa;
  }
}

/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
interface Chair {
  showInfoChair(): void;
}

interface CoffeeTable {
  showInfoCoffeeTable(): void;
}

interface Sofa {
  showInfoSofa(): void;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class VictorianChair implements Chair {
  style = "Victorian";
  showInfoChair(): void {
    console.log("This chair has", this.style, "style");
  }
}

class ModernChair implements Chair {
  style = "Modern";
  showInfoChair(): void {
    console.log("This chair has", this.style, "style");
  }
}

class VictorianCoffeeTable implements CoffeeTable{
    style = "Victorian";
    showInfoCoffeeTable():void{
        console.log("This coffee table has", this.style, "style");
    }
}

class ModernCoffeeTable implements CoffeeTable{
    style = "Modern";
    showInfoCoffeeTable():void{
        console.log("This coffee table has", this.style, "style");
    }
}

class VictorianSofa implements Sofa{
    style = "Victorian";
    peopleNumber = 4;
    showInfoSofa(): void {
        console.log("This sofa has", this.style, "style and ",this.peopleNumber, " people can fit in." );
    }
}
class ModernSofa implements Sofa{
    style = "Modern";
    peopleNumber = 3;
    showInfoSofa(): void {
        console.log("This sofa has", this.style, "style and ",this.peopleNumber, " people can fit in." );
    }
}

/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */

function clientCode(factory: FurnitureFactory) {
  const chairInstance = factory.createChair();
  const coffeeTableInstance = factory.createCoffeeTable();
  const sofaInstance = factory.createSofa();
  chairInstance.showInfoChair();
  coffeeTableInstance.showInfoCoffeeTable();
  sofaInstance.showInfoSofa();
}

/**
 * The client code can work with any concrete factory class.
 */
console.log("Abstract Factory");
console.log("\n-----------------\n");
const Victorian = new VictorianFurnitureFactory();
const Modern = new ModernFurnitureFactory();
clientCode(Victorian);
console.log("--------------------");
console.log("Modern ");
clientCode(Modern);

