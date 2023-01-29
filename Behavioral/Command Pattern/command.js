class Calculator {
  //Variables
  value;
  //Constructors
  constructor() {
    this.value = 0;
    this.history = [];
  }
  //Methods
  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  undoCommand() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
  subtract(substractValue) {
    this.value = this.value - substractValue;
  }
  multiply(multiplyValue) {
    this.value = this.value * multiplyValue;
  }
  divide(divideValue) {
    this.value = this.value / divideValue;
  }
}
/**
 * Class For Add Command
 */
class AddCommand {
  //Constructor
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }
  //Methods
  execute(currentVal) {
    return currentVal + this.valueToAdd;
  }
  undo(currentVal) {
    return currentVal - this.valueToAdd;
  }
}
/**
 * Class For Subtract Command
 */
class SubtractCommand {
  //Constructor
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }
  //Methods
  execute(currentVal) {
    return currentVal - this.valueToSubtract;
  }
  undo(currentVal) {
    return currentVal + this.valueToSubtract;
  }
}
/**
 * Class For Multiply Command
 */
class MultiplyCommand {
  //Constructor
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }
  //Methods
  execute(currentVal) {
    return currentVal * this.valueToMultiply;
  }
  undo(currentVal) {
    return currentVal / this.valueToMultiply;
  }
}
/**
 * Class For Divide Command
 */
class DivideCommand {
  //Constructor
  constructor(valueToDiv) {
    this.valueToDiv = valueToDiv;
  }
  //Methods
  execute(currentVal) {
    return currentVal / this.valueToDiv;
  }
  undo(currentVal) {
    return currentVal * this.valueToDiv;
  }
}

class AddThenMultiply {
    constructor(valueToAdd,valueToMultiply){
        this.addCommand = new AddCommand(valueToAdd);
        this.multiplyCommand = new MultiplyCommand(valueToMultiply);
    }

    execute(currentVal){
        const newVal = this.addCommand.execute(currentVal);
        return this.multiplyCommand.execute(newVal);
    }

    undo(currentVal){
        const newVal = this.multiplyCommand.undo(currentVal);
        return this.addCommand.undo(newVal);
    }
}

const calc = new Calculator();
calc.executeCommand(new AddCommand(100));
console.log(calc.value);
calc.executeCommand(new AddCommand(10));
console.log(calc.value);
calc.undoCommand();
console.log(calc.value);
calc.executeCommand(new SubtractCommand(20));
console.log(calc.value);
calc.executeCommand(new MultiplyCommand(10));
console.log(calc.value);
console.log(calc.history);
calc.undoCommand();
calc.undoCommand();
console.log(calc.value);
calc.executeCommand(new AddThenMultiply(10,2));
console.log(calc.value);
calc.undoCommand();
console.log(calc.value);
