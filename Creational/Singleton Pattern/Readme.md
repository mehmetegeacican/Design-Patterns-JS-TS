# Singleton Design Pattern
<li>In essence, it is a way of creating a single instance object that is shared in different classes. Objects share one instance of this object.</li>

## Problem 
The Singleton pattern solves problems but at the same time `violates the Single Responsibility Principle`
<br/>
<li> Allowing to create only one instance, solving how many instances should a class has. </li>
<li> Provide a global access point to that instance. Make sure that the instance is reachable everywhere.</li>
<li> Just like a global variable, the Singleton pattern lets you access some object from anywhere in the program. However, it also protects that instance from being overwritten by other code. </li>

<br/>

`Why would anyone want to control how many instances a class has? The most common reason for this is to control access to some shared resource—for example, a database or a file.`

## Solution 

<li> Make the default constructor private, to prevent access for other objects to use the new operator with the Singleton class. </li>
<li> Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object. </li>

## Structure 

<li> Singleton : The class that has the instance as the ONE object to be called from all (Lotr ref.). More importantly, this class has a `getInstance()` method that returns the same instance </li>
<br/>

```
getInstance(){
  if(instance === null) {
    instance = new Singleton()
  }
  return instance;
}
```
<li> Client: The client that calls the Singleton class and its instance </li>

## Drawbacks
Hard dependency: <br/>
<li>The Single instance object and the code that depends on it becomes tight coupled. Making the instance incredibly hard to test </li>
<li>The object breaks the O principle of the SOLID. </li>
<li> Race Condition: Data to get overwritten because of object being reached out from multiple places </li>

<br/>

The Singleton Pattern can be efficient for cases where you need small amounts of info that wants to be shared through all of the app and does not require too much alteration.
