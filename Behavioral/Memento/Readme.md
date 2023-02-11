# Memento
Memento is a design pattern that lets you save and restore the previous state of an object without revealing its structure,detailed implementation
## Problem
How to make a copy of the object’s private state? How to solve this tricky situation that occurs due to the encapsulation?
## Solution
Store the copy of objects state in a special object(Memento). The contents of memento are only accessible to the object that produced it, not other one. Other objects 
must interact with mementos using an interface. This interface allows the objects the retrieve certain infos about the snapshot, but not the original object's state.
## Structure
<li> 1: Originator -> produces snapsots of its own state, as well as restoring its state when snapshots are required </li>
<li> 2: Memento -> A snapshot of the originator's state. </li>
<li> 3: Caretaker -> Decides When and why the snapshot should be captured, when the state should be restored </li>
<br/>
The memento class is nessed insde the orignator. This allows the originator to access the privately declared fields and methods of the memento, while the caretaker has limited access.
 
## Code Examples
