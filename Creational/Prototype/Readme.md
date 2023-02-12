# Prototype
Prototype is a creational design pattern that lets you copy existing objects without making your objects being dependent on their classes.

## Problem 
<li>Say you have an object, and you want to create a copy of it. First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object. However, not all objects can be copied like this because some of thee variables might be private and not visible from outside.</li>
<br/>
<li>Also, your code becomes dependant of the class that you're trying to make the copy of that objects class.</li>
<br/>
<li>Also, what if you just know the interface of that class and not the inner functions.</li>

## Solution
The Prototype pattern delegates the cloning process to the actual objects that are being cloned.
<br/>
<li> The pattern declares an interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object.</li>
<li> The clone method inside the classes  creates an object of the current class and carries over all of the field values of the old object into the new one. </li>
<li> An object that supports cloning is called a prototype. When your objects have dozens of fields and hundreds of possible configurations, cloning them might serve as an alternative to subclassing. </li>
<li>E.g: you create a set of objects, configured in various ways. When you need an object like the one you’ve configured, you just clone a prototype instead of constructing a new object from scratch. </li>

## Structure

<li> The Prototype interface: declares the common cloning methods. </li>
<li> The Prototype class: Has the actual the cloning method. In addition to copying the original object’s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc. </li>

## Code Example
