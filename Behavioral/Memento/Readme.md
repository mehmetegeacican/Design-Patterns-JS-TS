# Memento
Memento is a design pattern that lets you save and restore the previious state of an object without revealng the details of its implementation
## Problem
Before executing an operation, the app saves a snapshot of the objects’ state, which can later be used to restore objects to their previous state. However,
How to make a copy of the object’s private state? At here, we are encountering with an encapsualation prone to error. <br/>
## Solution 
The Memento pattern delegates creating the state snapshots to the actual owner of that state, the originator object. Hence, instead of other objects trying to copy the editor’s state from the “outside,” the editor class itself can make the snapshot since it has full access to its own state <br/>
The pattern suggests storing the copy of the object’s state in a special object called memento. The contents of the memento aren’t accessible to any other object except the one that produced it. Other objects must communicate with mementos using a limited interface which may allow fetching the snapshot’s metadata
## Structure
<li> 1: Originator -> produces snapsots of its own state, as well as restoring its state when snapshots are required </li>
<li> 2: Memento -> A snapshot of the originator's state. </li>
<li> 3: Caretaker -> Decides When and why the snapshot should be captured, when the state should be restored </li>
<br/>
The memento class is nessed insde the orignator. This allows the originator to access the privately declared fields and methods of the memento, while the caretaker has limited access.
 
## Code Examples