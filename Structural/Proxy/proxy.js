// Simulated External API
function CryptoCurrencyAPI(){
    this.getValue = function(coin){
        console.log("External API called");
        switch(coin){
            case "Bitcoin":
                return "€7500";
            case "LiteCoin":
                return "€50";
            case "Ethereum":
                return "€180";
        }
    }
}

function CryptoCurrencyProxy(){
    this.api = new CryptoCurrencyAPI();
    this.cache = {};

    this.getValue = function(coin){
        if(this.cache[coin] == null){
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }
}
/////////////////////
const api = new CryptoCurrencyProxy();
console.log(api.getValue("Bitcoin"));
console.log(api.getValue("LiteCoin"));
console.log(api.cache);
console.log("Calling from Proxy");
console.log(api.getValue("Bitcoin"));
console.log(api.getValue("Ethereum"));

//What if we made 1000... requests, we have to make a network call for each of them
//It would be nice to have a proxy that
//talks with the API for us in between
//e.g --> What if the proxy is used for using the cache instead of calling the 
//external api all the time.

