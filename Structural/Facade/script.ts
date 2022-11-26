/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */
class Operator {
    protected englishHelp:SubsystemEnglish;
    protected turkishHelp:SubsystemTurkish;

    /**
     * Depending on your application's needs, you can provide the Facade with
     * existing subsystem objects or force the Facade to create them on its own.
     */
     constructor(subsystem1?: SubsystemEnglish, subsystem2?: SubsystemTurkish) {
        this.englishHelp = subsystem1 || new SubsystemEnglish();
        this.turkishHelp = subsystem2 || new SubsystemTurkish();
    }

    /**
     * The Facade's methods are convenient shortcuts to the sophisticated
     * functionality of the subsystems. However, clients get only to a fraction
     * of a subsystem's capabilities.
     */
     public operation(press:number): void {
        console.log('Hello Operator:');
        console.log('Please Press 1 for English, 2 for Turkish');
        if(press === 1){
            this.englishHelp.greeting();
            this.englishHelp.helpMenu();
        }
        else if(press === 2){
            this.turkishHelp.greetingT();
            this.turkishHelp.helpMenuT();
        }
    }
}

/**
 * The Subsystem can accept requests either from the facade or client directly.
 * In any case, to the Subsystem, the Facade is yet another client, and it's not
 * a part of the Subsystem.
 */
 class SubsystemEnglish {
    public greeting(): void {
        console.log('Hello There!');
    }
    public helpMenu(): void {
        console.log('How can we help?\n');
    }
}
/**
 * Some facades can work with multiple subsystems at the same time.
 */
class SubsystemTurkish {
    public greetingT(): void {
        console.log('Esenlikler!');
    }
    public helpMenuT(): void {
        console.log('Nasıl Yardımcı olabiliriz?\n');
    }
}

/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade. When a facade manages the lifecycle of the subsystem,
 * the client might not even know about the existence of the subsystem. This
 * approach lets you keep the complexity under control.
 */
 function clientCode(facade: Operator) {
    facade.operation(1);
    console.log("-------------------");
    facade.operation(2);
}

/**
 * The client code may have some of the subsystem's objects already created. In
 * this case, it might be worthwhile to initialize the Facade with these objects
 * instead of letting the Facade create new instances.
 */
 const subsystem1 = new SubsystemEnglish();
 const subsystem2 = new SubsystemTurkish();
 const facade = new Operator(subsystem1, subsystem2);
 clientCode(facade);
