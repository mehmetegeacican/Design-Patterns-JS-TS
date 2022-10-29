/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class Dialog {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract createButton():Button;
    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public render():string {
        const okButton = this.createButton();
        console.log(okButton);
        return "The button have been rendered\n" + okButton.onClick();
    }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface Button{
    onClick():string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class WindowsButton implements Button{
    public onClick(): string {
        return "Windows Button clicked";
    }
}

class HTMLButton implements Button{
    public onClick(): string {
        return "HTML Button clicked";
    }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class WindowsDialog extends Dialog{
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public createButton(): Button {
        return new WindowsButton();
    }
}

class WebDialog extends Dialog{
    public createButton(): Button {
        return new HTMLButton();
    }
}

function clientCode(dialog:Dialog){
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(dialog.render());
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
 console.log('App: Launched with the HTML Dialog.');
 clientCode(new WebDialog());
 console.log('');
 
 console.log('App: Launched with the Windows Dialog.');
 clientCode(new WindowsDialog())