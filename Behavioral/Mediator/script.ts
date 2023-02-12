/**
 * The Mediator interface: Declares common methods for Mediators 
 */
interface Mediator{
    notify(sender: object,event:string):void;
}

/**
 * Mediators: Actual classses that implement cooperative behavior by coordinating several
 * components.
 */
class AuthenticationDialog implements Mediator {
    //Variables
    private title: string;
    private loginOrSignUp:boolean;
    private loginUserName:Textbox
    private loginPassword: Textbox;
    private rememberName: Checkbox; 
    private ok:Button;
    private cancel: Button;
    //Constructors
    constructor(title:string,loginOrSignUp:boolean = false,loginUserName:Textbox,
        loginPassword:Textbox,remember:Checkbox,
        ok:Button,cancel:Button)
    {
        this.title = title;
        this.loginOrSignUp = loginOrSignUp;
        this.loginUserName = loginUserName;
        this.loginUserName.setMediato(this);
        this.loginPassword = loginPassword;
        this.loginPassword.setMediato(this);
        this.rememberName = remember;
        this.rememberName.setMediato(this);
        this.ok = ok;
        this.ok.setMediato(this);
        this.cancel = cancel;
        this.cancel.setMediato(this);

    }
    //Methods
    notify(sender: object, event: string): void {
        if(event === "Textbox"){
            console.log("Textbox was used");
        }
        if(event === "Button"){
            console.log("Button was used");
        }
        if(event === "Checkbox"){
            console.log("Checkbox was used");
        }
    }  
}

/**
 * The Componet Class --> The Parent class for components 
 */
class Component {
    //Variables
    protected dialog:Mediator;
    //Constructors
    constructor(mediator?:Mediator){
        this.dialog = mediator!;
    }
    //Methods
    public setMediato(mediator:Mediator):void{
        this.dialog = mediator;
    }

    public click():void{
        console.log("Clicked");
    }

    public keyPress(input:string):void {
        console.log("Input entered",input);
    }
}

/**
 * Subclasses that utilizes te Parent Component and Alters certain behaviours
 * according to themselves
 */
class Textbox extends Component {
    public keyPress(input: string): void {
        console.log("Input is",input);
        this.dialog.notify(this,"Textbox");
    }
}
class Checkbox extends Component {
    //Variables
    private checked:boolean = false;
    //Methods
    public click(): void {
        if(this.checked)
            console.log("Checked");
        else
            console.log("Unchecked");

        this.checked = !(this.checked);
        this.dialog.notify(this,"Checkbox");
    }
}
class Button extends Component {
    public click(): void {
        this.dialog.notify(this,"Button")
    }
}

function clientCode(){
    const title:string = "Authentication Dialog";
    const loginUserName = new Textbox();
    const loginPassword = new Textbox();
    const remember = new Checkbox();
    const ok = new Button();
    const cancel = new Button();

    const mediator = new AuthenticationDialog(title,true,loginUserName,loginPassword,remember,ok,cancel);
    loginUserName.keyPress("Obi Wan Kenobi");
    loginPassword.keyPress("HelloThere");
    remember.click();
    remember.click();
    ok.click();
}

clientCode();


