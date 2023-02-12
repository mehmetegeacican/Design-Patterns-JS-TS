# Visitor
Separates algorithms from the object structure that they operate.
## Problem
Say that you have an application that works with geographic inforamtion and contains complex objects such as cities,industries,sightseeing areas etc. <br/>
Imagine that you've been asked to implement an export function that is different for all the entities. <br/>
One method to implement export is to use polymorphism, add the function and alter its behaviour regarding the class it is in. But this brings bug potentials and can break the Single Responsibility aspect of SOLID,after all, each classes should only be responsible for one thing. <br/>
Also, this can make your code tightly coupled, meaning if there is a change required, then the desired change might affect different places in your implementation <br/>
## Solution
Place the new behaviour in a separate `Visitor` class rather than integrating it to the existing classes. <br/> 
Pass the original object that performs the new behaviour as a parameter and provide a method in Visitor to use that new behaviour according to the parameter class <br/>
`behaveForCity()` <br/>
The Visitor Pattern  also uses a technique called `Double Dispatch`, this helps to execute the proper methods without requireing chaotic conditionals. <br/>

## Structure
<li> The IVisitor: The Visitor Interface: declares the common visiting functions </li>
<li> The Visitor: The Visitor Class: The actual classes that uilizes the interfaces </li>
<li> The Element: The Interface : declares the common functions for visitor accepting </li>
<li> The Element: The Class : The Actual element classes that uses the actual visitors </li>

## Code Examples