

/**
 * The Abstract Factory interface declares common methods used in all factories
 */
interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable,
  createSofa():Sofa
}

/**
 * Factory classes: produce a family of products that belong to same category
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
 * Interfaces of distinct products
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
 * Actual Classes of the Products
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
 * The Client Code
 * @param factory The Factory that extends the Abstract F
 */

function clientCode(factory: FurnitureFactory) {
  const chairInstance = factory.createChair();
  const coffeeTableInstance = factory.createCoffeeTable();
  const sofaInstance = factory.createSofa();
  chairInstance.showInfoChair();
  coffeeTableInstance.showInfoCoffeeTable();
  sofaInstance.showInfoSofa();
}


console.log("Abstract Factory");
console.log("\n-----------------\n");
const Victorian = new VictorianFurnitureFactory();
const Modern = new ModernFurnitureFactory();
clientCode(Victorian);
console.log("--------------------");
console.log("Modern ");
clientCode(Modern);

