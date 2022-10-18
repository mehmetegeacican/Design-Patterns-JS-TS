class LogList {
    constructor(){
        if(LogList.instance == null){
            this.logs = [];
            LogList.instance = this;
        }
        return LogList.instance;
    }

    log(message){
        this.logs.push(message);
        console.log("Log pushed: ", message);
    }

    printLogSize(){
        console.log(this.logs.length);
    }
}

function firstLog(){
    const logger = new LogList();
    logger.printLogSize();
    logger.log("First log\n");
    logger.printLogSize();
}

function secondLog(){
    const logger = new LogList();
    logger.printLogSize();
    logger.log("Second log\n");
    logger.printLogSize();
}

const logger = new LogList();
//With freeze method, the logger class can not have any additions or modifications
Object.freeze(logger);
firstLog();
secondLog();