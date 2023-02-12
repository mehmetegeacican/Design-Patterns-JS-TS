
interface IteratorItem<T> {
    //Current Element
    currentItem():T;
    //Returns the Next Element
    nextItem():T;
    //Returns the current key
    index():number;
    //Checks if the current position is valid
    isValid():boolean;
    //Traces back to the first element
    rewind():void;
}

class Collection {
    //Variables
    private items: string[] = [];
    //Methods
    getCount():number {
        return this.items.length;
    }

    addItems(item:string):void{
        this.items.push(item);
    }

    getItems():string[]{
       return this.items;
    }
    
}

/**
 * Iterator Classes implement various traversal algorithms.
 */
class CIterator implements IteratorItem<string> {

    //Variables
    private collection:Collection;
    private reverse:boolean = false;
    private position:number = 0;
    //Constructors
    constructor(colletion: Collection,reverse:boolean = false){
        this.collection = colletion;
        this.reverse = reverse;
        if(this.reverse === true){
            this.position = this.collection.getCount() - 1;
        }
    }
    //Methods
    nextItem():string{
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }
    currentItem(): string {
        return this.collection.getItems()[this.position];
    }
    index(): number {
        return this.position;
    }
    isValid(): boolean {
       if(this.reverse){
        return this.position >= 0;
       }
       return this.position < this.collection.getCount();
    }
    rewind(): void {
        this.position = this.reverse? this.collection.getCount() - 1:0;
    }
}

function clientCode(){
    const collection = new Collection();
    collection.addItems("Hello");
    collection.addItems("It's me");
    collection.addItems("I was wondering about all");

    const iterator = new CIterator(collection);
    const reverse = new CIterator(collection,true);
    //Straight
    while(iterator.isValid()){
        console.log(iterator.nextItem());
    }
    console.log(iterator,reverse);
    while(reverse.isValid()){
        console.log(reverse.nextItem());
    }
}

clientCode();