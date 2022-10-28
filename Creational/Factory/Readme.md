#  Factory Pattern

Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
<br/>

## Problem
Imagine that you’re creating a logistics management application.The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the Truck class. <br/>
As time moves on, different transportation methods become available for your app. The code that was coupled to the Truck class becomes obsolete and you need to make changes to the entire codebase. <br/>
In the end, you will end up with pretty nasty code, riddled with conditionals that switch the app’s behavior depending on the class of transportation objects. <br/>

## Solution
The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. <br/>
The objects are still created via the new operator, but it’s being called from within the factory method.

## Structure

<li> The product interface --> declares the interface common to all objects that can be produced by creator or its subclasses </li>
<li> Concrete Product --> Sub implementations of the product interface </li>
<li> The Creator/Factory class --> declares the factory method that returns new product objects ( return type of this method must match the product interface.) </li>
<li> Concrete Creators/Factories --> override the base factory method so that it can return a specific type of productt </li>

## Examples
Examples from the real world should be found.

