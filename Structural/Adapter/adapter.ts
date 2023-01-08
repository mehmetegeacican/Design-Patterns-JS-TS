
interface IphoneInterface {
    useLightning():void;
}

interface IAndroid{
    useMicroUSB():void;
}

class Iphone implements IphoneInterface{
    useLightning(){
        console.log("Using Lightning Port");
    }
}

class Android implements IAndroid {
    useMicroUSB(){
        console.log("Use MicroUSB Port");
    }
}

// What if we need to charge Iphone with MicroUSB, 
//We need an adapter for Iphone 
// for to be charged with MicroUSB

class LightningToMicroUSBAdapter implements IAndroid {

    iphoneDevice: Iphone;

    constructor(iPhone:Iphone){
        this.iphoneDevice = iPhone;
    }

    public useMicroUSB() {
        console.log("Want to Use MicroUSB,Allowing lightning to be used");
        this.iphoneDevice.useLightning();
    }
}

function clientCode(){
    let iphone = new Iphone;
    let adapter = new LightningToMicroUSBAdapter(iphone);
    iphone.useLightning();
    console.log("Using Adapter for using MicroUSB\n");
    adapter.useMicroUSB();
}

clientCode();