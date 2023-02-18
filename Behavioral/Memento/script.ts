
class Originator {
    //Variables
    private state:string;
    //Constructor
    constructor(state:string) {
        this.state = state;
    }
    /**
     * Displays the state
     * @returns this.state
     */
    public getState():string {
        return this.state;
    }
    /**
     * Sets the state
     * @param state The new state
     */
    public setState(state:string) {
        this.state = state;
        console.log("State changed to: " + state);
    }
    /**
     * Saves the Current State
     */
    public save():Memento{
        return new MementoClass(this.state);
    }
    /**
     * Restores the Originator state from a memento object
     */
    public restore(memento:Memento){
        this.state = memento.getState();
    }
}
/**
 * Memento -> Interface to define common methods
 * to retrieve mementos metadata
 * without exposing the Originator's state
 */
interface Memento {
    //Methods
    getState():string;
    getMetadata():string;
    getCreatedAt():string;
}

/**
 * The actual Memento class that implements the Memento interface
 */
class MementoClass implements Memento {
    //Variables
    private state:string;
    private date:string;
    //Constructor
    constructor(state:string) {
        this.state = state;
        this.date = new Date().toDateString();
    }
    getState(): string {
        return this.state;
    }
    getMetadata(): string {
       return this.state + " " + this.date;
    }
    getCreatedAt(): string {
        return this.date.toString();
    }
}
/**
 * Caretaker class
 * Does not access the Originator's state.
 * Works with mementos via intterface
 */
class CareTaker {
    //Variables
    private mementos:Memento[] = [];
    private originator:Originator;
    //Constructor
    constructor(originator:Originator){
        this.originator = originator;
    }
    //Methods
    /**
     * Stores a new Snapshot of the Originators encapsulated 
     * state
     */
    public store():void{
        this.mementos.push(this.originator.save());
        console.log("New Snapshot saved");
    }
    /**
     * Removes the last inserted snapshot
     */
    public removeSnapshot():void{
        if(!this.mementos.length){
            return;
        }
        const snapshot = this.mementos.pop();
        console.log("Removing snapshot");
        if(snapshot !== undefined)
            this.originator.restore(snapshot);
    }
}

function clientCode():void{
    const originator = new Originator("A");
    const caretaker = new CareTaker(originator);
    caretaker.store();
    console.log(originator.getState());
    caretaker.removeSnapshot();
}

clientCode();

