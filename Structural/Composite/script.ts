/**
 * The base Component class declares common operations for both simple and
 * complex objects of a composition.
 */
abstract class Box {
    //Variables
    protected parentBox!: Box | null;
    //Constructors
    //Methods
     /**
     * Optionally, the base Component can declare an interface for setting and
     * accessing a parent of the component in a tree structure. It can also
     * provide some default implementation for these methods.
     */
     public setParent(parent: Box | null) {
        this.parentBox = parent;
    }

    public getParent(): Box | null {
        return this.parentBox;
    }

    /**
     * In some cases, it would be beneficial to define the child-management
     * operations right in the base Component class. This way, you won't need to
     * expose any concrete component classes to the client code, even during the
     * object tree assembly. The downside is that these methods will be empty
     * for the leaf-level components.
     */
    public addBox(box: Box):void {}

    public removeBox(box:Box):void {}

     /**
     * You can provide a method that lets the client code figure out whether a
     * component can bear children.
     */
    public isComposite(): boolean {
        return false;
    }
    
    /**
     * The base Component may implement some default behavior or leave it to
     * concrete classes (by declaring the method containing the behavior as
     * "abstract").
     */
    public abstract displayBoxContents(): string;
}

/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children.
 *
 * Usually, it's the Leaf objects that do the actual work, whereas Composite
 * objects only delegate to their sub-components.
 */
class Leaf extends Box {
    //Variables
    private item: string;
    //Constructors

    //Methods
    public displayBoxContents(): string {
        return "The Box contains items. This is a leaf box";
    }
}

/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
class CompositeBox extends Box {
    //Variables
    protected children: Box[] = [];
    //Methods

    public addBox(box: Box): void {
        this.children.push(box);
    }

    public removeBox(box: Box): void {
        const index = this.children.indexOf(box);
        this.children.splice(index,1);
        box.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public displayBoxContents(): string {
        const res:string[] = [];
        for(const child of this.children){
            res.push(child.displayBoxContents());
        }
        return `Branch(${res.join('+')})`;
    }
}

function clientCode(box:Box){
    console.log(box.displayBoxContents());
}

const leaf = new Leaf();
clientCode(leaf);

const tree = new CompositeBox();
tree.addBox(new Leaf());
tree.addBox(new Leaf());

const branch = new CompositeBox();
branch.addBox(new Leaf());
tree.addBox(branch);

clientCode(tree);

