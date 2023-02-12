# Composite Pattern
Composite is a structural design pattern that lets you compose objects into tree structures and then work loose coupled with these structures, treat them as if they were individual objects.

## Problem
If your model can be represented as a tree, why not?
For example, imagine you have `Product` and `Box` objects. A box can contain several products as well as number of other smmall boxes. These little boxes can hold the same values and so it continues...
What if you searched or needed sorting for these boxes? What if you needed to calculate the total price of such a complex order? How woul you do it?
## Solution
The Composite pattern suggests that you work with Products and Boxes through a common interface which declares a method for calculating the total price.
Recursively, the method would go over each prodcut that a box contains and if there is a smaller box is within the box, the method can be called again for that smaller box.
The greatest benefit of this approach is that you don’t need to care about the concrete classes of objects that compose the tree.

Another example: Armies of most countries are structured as hierarchies. An army consists of several divisions; a division is a set of brigades, and a brigade consists of platoons, which can be broken down into squads. Finally, a squad is a small group of real soldiers. Orders are given at the top of the hierarchy and passed down onto each level until every soldier knows what needs to be done.

## Structure
<li> 1-> Component: Interface that descriibes the common operations to simle and complex elements of the tree </li>
<li> 2-> The Leaf: The basic element of the tree that doesn't have ub elements. Simplest element </li>
<li> 3-> Composite: The elements that has sub elements, leaves or other  containers. It delegates the wok to its children </li>

## Code Example