# Iterator Design Pattern
Iterator is a behavioral design pattern that lets you traverse elements of a collection without
exposing its structure(list,stack,tree)
## Problem
A collection, no matter the structure, should provide some way of accessing elements so that other code can use these elements.
There should be a way to go through each element of the collection without accessing the same elements over and over.
How do you traverse elements of complex data structures like trees? <br/>
For example, one day you might be just fine with depth-first traversal of a tree. Yet the next day you might require breadth-first traversal. And the next week, you might need something else, like random access to the tree elements. <br/>
Adding more and more traversal algorithms to the collection gradually blurs its primary responsibility, which is efficient data storage. Additionally, some algorithms might be tailored for a specific application, so including them into a generic collection class would be weird. <br/>
Also, it might not particularly concern a client of how the data is stored, and how it is iterated.

## Solution
Extract the traversal behaviour of a collection into a separate object called `Iterator`. <br/>
For example, depth first iterator and breadth-first iterator. <br/>
In addition to implementing the algorithm itself, an iterator object encapsulates all of the traversal details, such as the current position and how many elements are left till the end. Because of this, several iterators can go through the same collection at the same time, independently of each other. <br/>
All iterators must implement the same interface.This allows compatibility to any collection and traversal algorithm. <br/>

## Structure
<li> 1-> The Client </li>
<li> 2 -> Iterator Interface: declares the operations required for traversing collections </li>
<li> 3-> Concrete Interators: Implements specific algorithms for traversing a collection. Traccks thee traversal progresss on its own </li>
<li> 4-> IterableCollection: interface that declares one or multiple methods for getting ierators compatible with collection </li>
<li> 5-> Concrete Collection : Returns new instances of particular concrete iterator class each time the client requests for one </li>

## Code Examples