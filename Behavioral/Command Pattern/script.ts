/**
 * The Command Interace
 */
interface Command {
  execute(val: number): number;
  undo(val: number): number;
}
/**
 * ADD Command Class
 */
class Add implements Command {
  //Variables
  public valueToAdd;
  //Constructors
  constructor(valueToAdd: number) {
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
  constructor(valueToSubtract: number) {
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

/**
 * Multiply Command
 */
class Multiply implements Command {
  //Variables
  public valueToMultiply;
  //Constructor
  constructor(valueToMultiply: number) {
    this.valueToMultiply = valueToMultiply;
  }
  //Methods
  execute(val: number): number {
    return val * this.valueToMultiply;
  }
  undo(val: number): number {
    return val / this.valueToMultiply;
  }
}

/**
 * Divide Command
 */
class Divide implements Command {
  //Variables
  public valueToDivide;
  //Constructor
  constructor(valueToDivide: number) {
    this.valueToDivide = valueToDivide;
  }
  //Methods
  execute(val: number): number {
    return val / this.valueToDivide;
  }
  undo(val: number): number {
    return val * this.valueToDivide;
  }
}

class CalculatorInvoker {
  //Variables
  public value: number;
  public history: Command[];
  //Constructor
  constructor() {
    this.value = 0;
    this.history = [];
  }
  //Methods
  execute(command: Command): void {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  undo(): void {
    const recentCommand = this.history.pop();
    this.value = recentCommand ? recentCommand.undo(this.value) : this.value;
  }
}

function clientCode() {
  const calc = new CalculatorInvoker();
  calc.execute(new Add(5));
  calc.execute(new Add(10));
  calc.execute(new Add(100));
  console.log(calc.history);
  console.log(calc.value);
  calc.undo();
  console.log(calc.history, calc.value);
}

clientCode();
