/**
 * The Car class contains the intrinsic states
 */
class Car {
    //Variables
    private sharedState:any;
    //Constructors
    constructor(shared:any){
        this.sharedState = shared;
    }
    //Methods
    /**
     * This function displays the common and unique state
     * @param uniqueState The extrinsic 
     */
    public display(uniqueState):void{
        const distinct = JSON.stringify(uniqueState);
        console.log("Car, Constant Variables",JSON.stringify(this.sharedState));
        console.log("Car, Dynamic Variables",uniqueState);
    }
}

/**
 * The Flyweight Factory creates and manages the Flyweight objects. It ensures
 * that flyweights are shared correctly. When the client requests a flyweight,
 * the factory either returns an existing instance or creates a new one, if it
 * doesn't exist yet.
 */
class FlyweightFactory {
    //Variables
    private flyweights:{[key:string]:Car} = <any>{};
    //Constructor
    constructor(initial:string[][]){
        for(const state of initial){
            this.flyweights[this.getKey(state)] = new Car(state);
        }
    }
    //Methods
    private getKey(state: string[]) {
       return state.join("-");
    }
    /**
     * This function gets the specific Flyweight
     * @param shared the ıntrinsic states
     * @returns the existing or the newly reated flyweight
     */
    public getCars(shared:string[]):Car {
        const key = this.getKey(shared);
        //If key is not existent in the flyweights, create a new one
        if(!(key in this.flyweights)){
            this.flyweights[key] = new Car(shared);
        }
        //Else, use an existing one
        return this.flyweights[key]; 
    }
    /**
     * This function displays the flyweights
     */
    public listFlyweights() :void {
        for(const key in this.flyweights){
            console.log(this.flyweights[key]);
        }
    } 
}

const factory = new FlyweightFactory([
    ['Aston Martin', 'DBS', 'Red'],
    ['Mercedes Benz', 'C300', 'black'],
]);


function clientCode(factory:FlyweightFactory,plates:string,owner:string,brand:string,model:string,color:string){
    //Gets the Intrinsic Values
    const IntrinsicFlyweight = factory.getCars([brand,model,color]);
    IntrinsicFlyweight.display([plates,owner]);
}

factory.listFlyweights();
clientCode(factory,"01AA1234","James","BMW","X8","Black");
console.log("*******After client code*********");
factory.listFlyweights();
console.log("As it can be viewed, the cars static variables are bing held as intrinsic states whiile the variables that might change regulary,");
console.log("such as plate and Owner, is being added as distinct variables")
