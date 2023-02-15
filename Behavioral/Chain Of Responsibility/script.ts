/**
 * The Handler interface: Declares the common methods for all handlers
 */
interface Handler {
  setNextHandler(handler: Handler): Handler;
  //handles the request, if not passes to the next handler
  handle(user: User, price: number): string;
}
class User {
  //Variables
  public username: string;
  public password: string;
  public hasAccess: boolean;
  //Constructor
  constructor(
    username: string = "",
    password: string = "",
    hasAccess: boolean = false
  ) {
    this.username = username;
    this.password = password;
    this.hasAccess = hasAccess;
  }
  //Methods
}
/**
 * The Base Handler class
 * Implements the Handler interface
 */
abstract class OrderHandler implements Handler {
  //Variables
  private nextHandler: Handler;
  //Constructor
  //Methods
  setNextHandler(handler: Handler): Handler {
    this.nextHandler = handler;
    return this.nextHandler;
  }
  handle(user: User, price: number): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(user, price);
    }
    return "--";
  }
}

/**
 * The Child Handlers
 */
class AuthenticationHandler extends OrderHandler {
  //Methods
  public handle(user: User, price: number): string {
    if (user.username === "" || user.password === "") {
      console.log("Authentication failed: " + user.username);
      return "Authentication step";
    } else {
      console.log("Authentication successful: " + user.username);
      return super.handle(user, price);
    }
  }
}

class AuthorizationHandler extends OrderHandler {
  public handle(user: User, price: number): string {
    if (!user.hasAccess) {
      console.log("Authorization failed: " + user.username);
      return "Authorization step";
    } else {
      console.log("Authorization successful: " + user.username);
      return super.handle(user, price);
    }
  }
}

class ShoppingHandler extends OrderHandler {
  public handle(user: User, price: number): string {
    if (price <= 100) {
      console.log("You must have at least 100 dollars to purchase");
      return "Shopping step";
    } else {
      console.log("Shopping Successful");
      return super.handle(user, price);
    }
  }
}

function client(): void {
  //User that does not have authorization
  const user = new User("John", "1234");
  //User that has authorization7
  const user2 = new User("John", "1234", true);
  //Handlers
  const authenticator = new AuthenticationHandler();
  const authorizator = new AuthorizationHandler();
  authenticator.setNextHandler(authorizator);
  authorizator.setNextHandler(new ShoppingHandler());

  console.log(authenticator.handle(user, 5));
  console.log("******************************");
  console.log(authenticator.handle(user2, 95));
  console.log("******************************");
  console.log(authenticator.handle(user2, 110));
}

client();
