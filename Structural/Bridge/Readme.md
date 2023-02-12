# Bridge Pattern
Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies,`abstraction and implementation`. The Abstraction and Implementattion can then be implemented independently of each other
## Problem
The problem is creating too many multiple subclasses.
E.g: You have `Shape` class that has 2 subclasses : `Circle`,`Square`. You want to extend this hierarchy based on color:`Red`,`Blue`. Since you have already 2 subclasses, with the added subclasses. You need to have 2*2 = 4 combinations such as `BlueCircle`,`RedCircle` etc... More subclasses will result in exponential growth.
## Solution
This problem occurs because we’re trying to extend the shape classes in two independent dimensions: by form and by color. That’s a very common issue with class inheritance.
The Bridge pattern attempts to solve this problem by switching from inheritance to the object composition.
What this means is that you extract one of the dimensions into a separate class hierarchy, so that the original classes will reference an object of the new hierarchy, instead of having all of its state and behaviors within one class.

## Structure
<li> 1-> Abstraction: Provides high level control</li>
<li> 2-> The Implementation: Declares the interface that is common for all implementations classes. An abstraction can only communicate with an implementation object via methods that are declared here. </li>
<li> 3-> Implementations: The Implmentation Classes that implement the interface and utilizes platform specific code </li>
<li> 4-> Refined Abstractions: Provide vaiants of control logic </li>

## Code Examples