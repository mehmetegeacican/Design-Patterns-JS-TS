/**
 * The interfface for common declarations of elements
 */
interface IElement {
  accept(visitor: IVisitor): void;
}
/**
 * Element classes that utilize the IElement interface
 */
class ElementA implements IElement {
  accept(visitor: IVisitor): void {
    visitor.visitElementA(this);
  }
  /**
   * Special Function of Element
   * @returns {*string} Element A
   */
  getElement(): string {
    return "Element A";
  }
}
class ElementB implements IElement {
  accept(visitor: IVisitor): void {
    visitor.visitElementB(this);
  }
  /**
   * Special Function of Element
   * @returns {*string} Element B
   */
  getElement(): string {
    return "Element B";
  }
}
/**
 * the interface for Visitor for the visiting operations
 */
interface IVisitor {
  visitElementA(element: ElementA): void;
  visitElementB(element: ElementB): void;
}
/**
 * The Actual Visitor
 */
class VisitorA implements IVisitor {
  visitElementA(element: ElementA): void {
    console.log("Visited",element.getElement());
  }
  visitElementB(element: ElementB): void {
    console.log("Visited",element.getElement());
  }
}
/**
 * The Client Code
 * @param elements element array 
 */
function clientCode(elements:IElement[],visitor:IVisitor){
    for(const element of elements){
        element.accept(visitor);
    }
}  

const elements = [
    new ElementA(),
    new ElementB(),
    new ElementB()
];

const visitor = new VisitorA();

clientCode(elements,visitor);

