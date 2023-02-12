# Facade Pattern
Facade is a structural design pattern that provides a unified and simplified interface to a library, a framework, classes or any other set of subsystems .

## Problem
Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on.

As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain.

## Solution
A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. The facade class only deals with the parts that the user cares about.

## Example 
Operator services are perfect examples for Facades. When you call a place or a shop for a request, the operator acts like a facade, provides a simple voice interface (Press 9 for ...)  to the services.

## Structure
<li> The Facade: The operator --  provides convenient access to a particular part of the subsystem’s functionality. It knows where to direct the client’s request and how to operate all the moving parts. </li>
<li> An Additional Facade class can be created to prevent polluting a single facade with unrelated features that might make it yet another complex structure. </li>
<li> The Complex Subsystem consists of dozens of various objects. Subsystem classes aren’t aware of the facade’s existence. They operate within the system and work with each other directly. </li>
<li> The Client:  uses the facade instead of calling the subsystem objects directly. </li>

## Code Examples
I have used Facade for API Integration before, the basic facade consisted of getReq,postReq,putReq,delReq, an additional facade was added for specific subsystems like getUsers etc..

