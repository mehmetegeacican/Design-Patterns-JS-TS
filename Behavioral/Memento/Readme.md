# Memento
Memento is a design pattern that lets you save and restore the previous state of an object without revealing detailed information about it regarding its structure, algorithms etc.
## Problem
How can you make a copy of the private state of the object? How to solve this tricky situation that occurs due to the encapsulation?
## Solution
Store the copy of objects state in a special object `(Memento)`. The contents of memento are only accessible to the object that produced it, not other ones. Other objects 
must interact with mementos using an interface. This interface allows the objects the retrieve certain infos about the snapshot, but not the original object's state.
## Structure
<li> 1: Originator -> creates snapshots,the copy of the object at a certain state, of its own state and restores the state when required </li>
<li> 2: Memento -> An Interface for getting certain parts (allowed,accessible parts) of the snapshots </li>
<li> 3: Caretaker -> The classes that utilize the memento and uses the limmited info that they can receive from the private snapshot of the originator </li>
<br/>
The memento class is nessed inside the orignator. This allows the originator to access the privately declared fields and methods of the memento, while the caretaker has limited access.
 
## Code Examples
