# Facade Pattern
Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

## Problem
Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on.

As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain.

## Solution
A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. The facade class only deals with the parts that the user cares about.

## Example 
Operator services are perfect examples for Facades. When you call a place or a shop for a request, the operator acts like a facade, provides a simple voice interface (Press 9 for ...)  to the services.

