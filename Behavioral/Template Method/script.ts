
/**
 * Abstract class Defines a template method that uses specific steps
 */
abstract class CoctailMaker {
    //Variables
    protected ingredients: string[];
    //Constructor
    constructor(ingredients: string[]){
        this.ingredients = ingredients;
    }
    //Methods
    public templateMethod(): void {
        this.addIngredients(this.ingredients);
        this.addSpecialIngredient();
    };
    /**
     * The methods ccan have default implementations
     * @param ingredients 
     */
    public addIngredients(ingredients:string[]):void {
        console.log("Added ingredients",ingredients);
    }

    /**
     * The methods ccan have also abstract implementations
     */
    public addSpecialIngredient():void {}

}

/**
 * Child Class
 */
class MargaritaMaker extends CoctailMaker {
    //Variables
    protected ingredients: string[];
    //Methods
    constructor(ingredients: string[]) {
        super(ingredients);
    }
    addSpecialIngredient(): void {
        console.log("Added nectar and simple syrup");
    }
}
/**
 * Another Child Class
 */
class PinaColadaMaker extends CoctailMaker {
    //Variables
    protected ingredients: string[];
    //Constructor
    constructor(ingredients: string[]) {
        super(ingredients);
    }
    addSpecialIngredient(): void {}
}

function clientCode(){
    const pinacolamaker = new PinaColadaMaker(["120ml pineapple juice","60ml white rum","60ml coconut cream","ice"]);
    const margaritaMaker = new MargaritaMaker(["1/2 ounces silver tequila","1 ounce of Orange liqueur","3/4 ounce freshly squuezed ime juice","ice"]);
    pinacolamaker.templateMethod();
    margaritaMaker.templateMethod();
}

clientCode();