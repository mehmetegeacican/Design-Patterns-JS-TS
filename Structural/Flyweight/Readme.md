# Flyweight Design Pattern
Flyweight is a structural design pattern that lets you minimize memory usage by sharing some of the objects data with similar objects
## Problem
Imagine that you've developed a game and you want to play that game with yor friends. What happens when you are able to play the game but your friends are not able to play the game due to the insufficient amount of RAM on their computer?

The actual problem was related to your particle system. Each particle, such as a bullet, a missile or a piece of shrapnel was represented by a separate object containing plenty of data. At some point, when the carnage on a player’s screen reached its climax, newly created particles no longer fit into the remaining RAM, so the program crashed.

## Solution 
The constant data of an object (such as color and sprite that remains constant for each particle) is called intrinsic state. It lives within the object; other objects can not alter it.
The Rest of the objects state, such as altered from the outside by  other objects, are called the extrinsic state.

The flyweight pattern suggests to stop storing the extrinsic state insiide the object. Instead, passing the state to specific methods which rely on it. Only the intrinsic state stays in the object.
As a result, you’d need fewer of these objects since they only differ in the intrinsic state, which has much fewer variations than the extrinsic.

## Structure
<li>1->The Flyweight class contains the portion of the original object’s state that can be shared between multiple objects.</li>
<li>2->The Context class: contains the extrinsic state, unique across all original objects</li>
<li>3->The Client:calculates or stores the extrinsic state of flyweights.</li>
<br/>

## Code Examples