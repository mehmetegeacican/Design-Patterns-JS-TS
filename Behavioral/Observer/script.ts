interface IStore {
  addSubscriberCustomer(newSubscriber: Customer): void;
  removeSubscriber(oldSubscriber: Customer): void;
  //The notification method, publish method
  notify(product: Product): void;
}
/**
 * The Common Interface for Subscribers
 * Update method is the methd used for subscription
 */
interface ISubscribe {
  update(product: Product, store: Store): void;
}

/**
 * The Subscriber Class,Uses the Common Interface for Subscribers
 */
class Customer implements ISubscribe {
  //Variables
  public name: string;
  //Constructors
  constructor(name: string) {
    this.name = name;
  }
  //Methods
  update(product: Product, store: IStore): void {
    //Adjustificion of Store Conditions
    if (store instanceof Store) {
      console.log(
        "New Product arrival:",
        product.productName,
        "-",
        product.productCategory,
        "-",
        product.price,
        ",was delivered to the user",
        this.name
      );
    }
  }
}
/**
 * Product Class --Used as a object
 */
class Product {
  //Variables
  public productName: string;
  public productCategory: string;
  public price: number;
  private isOnDicsount: boolean;
  private disCountPercentage: number;
  //Constructor
  constructor(name: string, category: string, price: number) {
    this.productName = name;
    this.productCategory = category;
    this.price = price;
    this.isOnDicsount = false;
    this.disCountPercentage = 0;
  }
  //Methods
  public setDiscount(discount: number): void {
    this.disCountPercentage = discount;
    this.price = this.price * (discount / 100);
    this.isOnDicsount = true;
  }
}
class Store implements IStore {
  //Variables
  public products: Product[] = [];
  public subscribers: Customer[] = [];
  //Constructor
  constructor(products: Product[]) {
    this.products = products;
  }
  //Method
  addSubscriberCustomer(newSubscriber: Customer): void {
    if (
      this.subscribers.filter(
        (item: Customer) => item.name === newSubscriber.name
      ).length <= 0
    ) {
      this.subscribers.push(newSubscriber);
      console.log("New Subscriber Added:", newSubscriber.name);
    } else {
      console.log("The Customer is already in the subscriber list");
    }
  }
  removeSubscriber(oldSubscriber: Customer): void {
    if (
      this.subscribers.filter(
        (item: Customer) => item.name === oldSubscriber.name
      ).length > 0
    ) {
      const indexToBeRemoved = this.subscribers.indexOf(oldSubscriber);
      this.subscribers.splice(indexToBeRemoved, 1);
      console.log("Subscriber removed:", oldSubscriber.name);
    } else {
      console.log("Could not find the Customer");
    }
  }
  notify(product: Product): void {
    for (const subscriber of this.subscribers) {
      subscriber.update(product, this);
    }
  }
}
/**
 * Client Code
 */
function clientCode() {
  const iPhone = new Product("iPhone", "tech", 1000);
  const macbook = new Product("macbook", "tech", 2000);
  const products: Product[] = [iPhone, macbook];
  //The Publisher Init
  const techShop = new Store(products);
  //The Subscribers
  const customerA = new Customer("Jack");
  const customerB = new Customer("Jess");
  techShop.addSubscriberCustomer(customerA);
  techShop.addSubscriberCustomer(customerB);
  //New Product Arrived, Tme for Notifications
  const iPod = new Product("iPod", "tech", 500);
  techShop.products.push(iPhone);
  techShop.products.push(iPod);
  techShop.notify(iPod);
  //CustomerB decided to cancel subscription
  techShop.removeSubscriber(customerB);
  //New Product arrived
  console.log("******");
  const macbookPro = new Product("macbookPro", "tech", 1100);
  techShop.products.push(macbookPro);
  techShop.notify(macbookPro);
}

clientCode();
