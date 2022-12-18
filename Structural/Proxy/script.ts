
interface Subject {
    request():void;
}

class RealSubject implements Subject {
    public request(): void {
        console.log("The subject");
    }
}

class ProxySubject implements Subject {
    //The variables
    private real:RealSubject;
    ///constructor
    constructor(realSub:RealSubject){
        this.real = realSub;
    }
    //methods
    public checkAccess():boolean{
        console.log("Checking access");
        return true;
    }
    public request(): void {
        if(this.checkAccess())
            this.real.request();
    }
}

function cliecntCode(){
    const subject = new RealSubject();
    subject.request();
    const proxy = new ProxySubject(subject);
    proxy.request();
}

cliecntCode();