/**
 * The Command Interace
 */
interface Command {
    execute(val:number):number;
    undo(val:number):number;
}
/**
 * ADD Command Class
 */
class Add implements Command {
    //Variables
    public valueToAdd;
    //Constructors
    constructor(valueToAdd:number) {
        this.valueToAdd = valueToAdd;
    }
    //Methods
    execute(val: number): number {
        return val + this.valueToAdd;
    }
    undo(val: number): number {
        return val - this.valueToAdd;
    }
}
/**
 * Subtract Command 
 */
class Subtract implements Command {
    //Variables
    public valueToSubtract;
    //Constructors
    constructor(valueToSubtract:number) {
        this.valueToSubtract = valueToSubtract;
    }
    //Methods
    execute(val: number): number {
        return val - this.valueToSubtract;
    }
    undo(val: number): number {
        return val + this.valueToSubtract;
    } 
}

class CalculatorInvoker {
    //Variables
    public value:number;
    public history:Command[];
    //Constructor
    constructor(){
        this.value = 0;
        this.history = [];
    }
    //Methods
    execute(command:Command):void{
        this.value = command.execute(this.value);
        this.history.push(command);
    }
    undo():void{ 
        const recentCommand = this.history.pop();
        this.value = recentCommand?recentCommand.undo(this.value):this.value;  
    }
}

function clientCode(){
    const calc = new CalculatorInvoker();
    calc.execute(new Add(5));
    calc.execute(new Add(10));
    calc.execute(new Add(100));
    console.log(calc.history);
    console.log(calc.value);
    calc.undo();
    console.log(calc.history,calc.value);
}

clientCode();