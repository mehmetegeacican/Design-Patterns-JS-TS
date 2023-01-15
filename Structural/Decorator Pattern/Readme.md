# Decorator Design Pattern
Decorator is a structural design pattern that allows you to add new behaviours to objects by placing these objets inside special wrapper objects that contain the behaviours
## Problem
Imagine that you've implemented a library. At some point, the users of this library started to expect more features from it. Then, after some point as well, the features that are wanted has started to increase dramatically so much that you just can't satisfy the requirements by simply creating special subclasses because for each requirements that is wanted, you just can't create another subclass.
## Solution
Extending a class is the first thing that comes to mind when you need to alter an object’s behavior. However : <br/>
<li>Inheritance is static. You can’t alter the behavior of an existing object at runtime. You can only replace the whole object with another one that’s created from a different subclass.</li>
<li>Subclasses can have just one parent class. In most languages, inheritance doesn’t let a class inherit behaviors of multiple classes at the same time.</l,> <br/>
What about  Aggregation or Composition? <br/>
Both of the alternatives work almost the same way: one object has a reference to another and delegates it some work.With this new approach you can easily substitute the linked “helper” object with another, changing the behavior of the container at runtime <br/>
Another solution is, <br/>
A wrapper is an object that can be linked with some target object. The wrapper contains the same set of methods as the target and delegates to it all requests it receives. However, the wrapper may alter the result by doing something either before or after it passes the request to the target. <br/>

## Structure
<li> The Component -> Declares the common interface for wrappers and objects </li>
<li> Concrete Component -> Class of objects being wrapped. Defines the basic behaviour that can be altered by decorators </li>
<li> The Base Decorator -> has a field for referencing thee wrapped object. Delegates all operations to the wrapped object </li>
<li> Concrete Decorators -> define extra behaviours that acn be added to components dynamically. Overrides  the methods of the base decorators and execute their behaviour either before or after calling the parent method </li> <br/>

## Code Example
