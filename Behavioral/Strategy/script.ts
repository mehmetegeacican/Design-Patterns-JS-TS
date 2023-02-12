/**
 * The Strategy interface, declares the strategy,common operation
 */
interface IStrategy {
  buildRoute(from: string, to: string): void;
}

/**
 * The Strategy Classes
 */
class BiycleRouteStrategy implements IStrategy {
  buildRoute(from: string, to: string): void {
    console.log("Algorithm for Bicycle Route");
    // Some Algorithm ---
    console.log(
      "Best bicycle route from ,",
      from,
      " to ",
      to,
      " has been built"
    );
  }
}

class TouristicRouteStrategy implements IStrategy {
  buildRoute(from: string, to: string): void {
    console.log("Algorithm for Touristic Route");
    // Some Algorithm ---
    console.log(
      "Best touristic route from ,",
      from,
      " to ",
      to,
      " has been built"
    );
  }
}

class TrackingRouteStrategy implements IStrategy {
  buildRoute(from: string, to: string): void {
    console.log("Algorithm for Tracking Route");
    // Some Algorithm ---
    console.log(
      "Best tracking route from ,",
      from,
      " to ",
      to,
      " has been built"
    );
  }
}

/**
 * The Context class, utilizes the strategies
 */
class ContextNavigator {
  //Variables
  private strategy: IStrategy;
  //Constructors
  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }
  //Methods
  public getStrategy(): IStrategy {
    return this.strategy;
  }
  public setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }
  //Utilization of the Strategy interface
  public showBestRoute(from: string, to: string) {
    this.strategy.buildRoute(from, to);
  }
}

function clientCode() {
  const navigator = new ContextNavigator(new BiycleRouteStrategy());
  navigator.showBestRoute("A", "B");
  navigator.setStrategy(new TrackingRouteStrategy());
  navigator.showBestRoute("A", "B");
  navigator.setStrategy(new TouristicRouteStrategy());
  navigator.showBestRoute("A", "B");
  console.log(navigator.getStrategy());
}

clientCode();
