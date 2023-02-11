# Observer Design Pattern
Defines a subscription mechanism that alerts and informs multiple objects (subscribers) about events that was published( any event that happended)(Pubsub mechanism)
## Problem
Imagine you have two classes: `Customer` and `Store`
We need a system that allows to notify customers on brand new products that have arrived at the store.
The absence and incorrect handling of this requirement creates two problems: <br/>
1-> The Customer might visit the store too often unncessesarily <br/>
2-> The Store might notify the Customers unnecessarily and the Store might notify the Customers who are not particularyl interested with the arrived product. <br/>
## Solution
The object will have a publish-subscriber mechanism in which: <br/>
There will be an object that has dynamically changing data and an interesting state is called Publisher <br/>
This publisher will have subscribers that tracks the chenages in the data. <br/>
There will also be methods in the publisher class that adds and removes subscribers. <br/>

The subscriber classes might be varied and can be totaly ndependant of one another. Thereore, in order for the publisher to communicate with them, `they must implement the same interface`. This interface should declare a notification method with the parameters that publisher can use.
## Structure
<li> The Publisher --> The class that has the state to be shared and subscribers to send notification </li>
<li> The Interface Subscribe --> The subscriptin interfaces that declares common methods for allowing all of the subscriber classes to be adjustable, despite how different they are from one another, to the Publisher class </li>
<li> Subscriber -> The subscriber classes that gets the publishers state via updates </li>
## Code Example