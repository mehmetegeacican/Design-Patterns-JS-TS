/**
 * The Context Class
 * Utilizes the States Behaviours
 */
class TrafficLight {
  //Variables
  private state: IState;
  //Constructor
  constructor(initialState: IState) {
    this.changeState(initialState);
  }
  //Methods
  //Binds the State to the Context and Changes the State of the Context to the given parameter
  public changeState(state: IState): void {
    this.state = state;
    this.state.setContext(this);
  }
  public showCurrentLight(): void {
    this.state.showTrafficLight();
  }
  public changeLight(): void {
    this.state.changeTrafficLight();
  }
}

/**
 * State interface
 * Declaration of All State Variables
 * Abstract class was used in order to allow public access to the context,
 * This is not a good practice though, encapsulation would be better
 */
abstract class IState {
  //The Context that State is Attached to
  public context: TrafficLight;
  public abstract showTrafficLight(): void;
  //Alters the Contexts State To Different State
  public abstract changeTrafficLight(): void;
  //Set Context Method is used for adressing the User of the States
  public abstract setContext(context: TrafficLight): void;
}
/**
 * The Actual States
 * The implementatins change based on the state
 */
class RedState implements IState {
  public context: TrafficLight;
  showTrafficLight(): void {
    console.log("The Traffic Light is Red. This means that you must stop");
  }
  changeTrafficLight(): void {
    this.context.changeState(new YellowState());
  }
  setContext(context: TrafficLight): void {
    this.context = context;
  }
}
class YellowState implements IState {
  public context: TrafficLight;
  showTrafficLight(): void {
    console.log(
      "The traffic Light is Yellow, This means that you should be ready"
    );
  }
  changeTrafficLight(): void {
    this.context.changeState(new GreenState());
  }
  setContext(context: TrafficLight): void {
    this.context = context;
  }
}
class GreenState implements IState {
  public context: TrafficLight;
  showTrafficLight(): void {
    console.log("The Traffic Light is green. This means Go");
  }
  changeTrafficLight(): void {
    this.context.changeState(new RedState());
  }
  setContext(context: TrafficLight): void {
    this.context = context;
  }
}

function client() {
  const trafficLight = new TrafficLight(new RedState());
  let count: number = 0;
  while (count < 10) {
    trafficLight.showCurrentLight();
    //CHANGE STATE
    trafficLight.changeLight();
    count++;
  }
}

client();
