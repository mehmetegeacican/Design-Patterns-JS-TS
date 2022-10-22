function Process(state){
    this.state = state;
}

const Singleton = (function(){
    function ProcessManager(){
        this.numProcesses = 0
    }

    let pManager;

    function createProcessManager(){
        pManager = new ProcessManager();
        return pManager;
    }
    return {
        getProcessManager:()=>{
            if(!pManager){
                pManager = createProcessManager();
            }
            return pManager;
        }
    }
})()

const pM = Singleton.getProcessManager();
const pM2 = Singleton.getProcessManager();

if(pM === pM2){
    console.log("These process managers are the same!");
}
else{
    console.log("These process managers are different");
}