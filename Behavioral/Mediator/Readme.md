# Mediator
Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects.
The pattern prohibits direct communication between objects and forces them to connect only by a mediator
## Problem
Say you have a dialog for creating and editing customer profiles. It consists of various elements such as text fields, checkboxes, buttons
Elements can have lots of relations with other elements. Hence, changes to some elements may affect the others.
By having this logic implemented directly inside the code of the form elements you make these elements’ classes much harder to reuse in other forms of the app
## Solution
The Mediator pattern suggests that you should cease all direct communication between the components which you want to make independent of each other. Instead, these components must collaborate indirectly, by calling a special mediator object that redirects the calls to appropriate components.
Think about a central mediator object that allows communication.
## Structure
<li> 1-> Components: Various classes that contain business logic. Each of them has a reference to the mediator </li>
<li> 2-> Mediator Interface: declares methods of communication with components Components can only pass any context as arguments if no coupling occurs between two components </li>
<li> 3-> Concrete Mediators: encapsulate realtions between components </li>

## Code Example