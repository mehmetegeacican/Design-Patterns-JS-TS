/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
interface Notifier {
  sendMessage(): string;
}

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
class RegularNotifier implements Notifier {
  sendMessage(): string {
    return "Message sent";
  }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators.
 */
class Decorator implements Notifier {
  //Variables
  protected notifier: Notifier;
  //Constructor
  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }
  //Methods
  /**
   * The Decorator delegates all work to the wrapped component.
   * @returns {*string} the message
   */
  sendMessage(): string {
    return this.notifier.sendMessage();
  }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class FacebookDecorator extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This approach simplifies extension
   * of decorator classes.
   */
  public sendMessage(): string {
    return "Decorated For Facebook," + super.sendMessage();
  }
}

class InstagramDecorator extends Decorator {
  public sendMessage(): string {
    return "Decorated For Instagram," + super.sendMessage();
  }
}

function clientCode(regularNotifier: Notifier) {
  console.log(regularNotifier.sendMessage());
}

function main() {
  const simpleNotifier = new RegularNotifier();
  clientCode(simpleNotifier);
  console.log("Decorators are being added");
  //Decorator add
  const fb = new FacebookDecorator(simpleNotifier);
  const ig = new InstagramDecorator(fb);
  clientCode(ig);
}

main();
