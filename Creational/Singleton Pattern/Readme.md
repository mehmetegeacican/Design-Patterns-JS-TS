# Singleton Design Pattern
In essence, it is a way of creatiing a single instance object that is shared in different classes. Objects share one instance of this object.

<br/>

## Drawbacks
Hard dependency: <br/>
<li>The Single instance object and the code that depends on it becomes tight coupled. Making the instance incredibly hard to test </li>
<li>The object breaks the O principle of the SOLID. </li>
<li> Race Condition: Data to get overwritten because of object being reached out from multiple places </li>

<br/>

The Singleton Pattern can be efficient for cases where you need small amounts of info that wants to be shared through all of the app and does not require too much alteration.