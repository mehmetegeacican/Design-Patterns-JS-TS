
class Adaptee {
    public adapteeRequest():string{
        return "This is Adaptee's request";
    }
}


class Target {
    public request(): string {
        return 'Target: The default target.';
    }
}

class Adaptor extends Target {
    //Variable
    private adaptee:Adaptee;
    //Constructor
    constructor(param:Adaptee){
        super();
        this.adaptee = param;
    }
    //methods
    public request(): string {
        const res = this.adaptee.adapteeRequest().split('').reverse().join('');
        return res;
    }
}

function client(target:Target){
    console.log(target.request());
}

function main(){
    console.log("Target");
    const target = new Target();
    client(target);
    console.log("***************");
    console.log("Adaptee");
    const adaptee = new Adaptee();
    console.log("Adaptee is incompatible with Client");
    console.log("***************");
    console.log("Adaptor");
    const adaptor = new Adaptor(adaptee);
    client(adaptor);
    console.log("However, with an adaptor the adaptee can be compatible");
}

main();

