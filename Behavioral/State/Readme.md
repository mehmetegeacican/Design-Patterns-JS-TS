# State
Allows an object to alter its behaviour when its internal state changes. The object acts according to the principles of a Finite State Machines
## Problem
Think of a Finite-State Machine. At a random moment, the object can be in the defined states and its behaviour can be adjusted to the state that it is currently in.
The object can switch to the specific predefined states.
However, the objects that mimic finite-state machines have also their cons. One con is, due to the state nature, the objects can have multiple state-dependent behaviours and these conditions can be satisfied with the `if` or `switch` conditionals. <br/>
However, what if you have enourmous amount of switches or if statements? <br/>
What if your states get altered and more and more states are being added to your object? <br/>
How can a state machine with massive amountss of states be managed efficiently? <br/>

## Solution

One solution for this would be to create separate classes for each state of an object and add the specific behaviours of the state to those specific classes. <br/>
Rather than adding these behaviours on the context, the orginal object, just letting the context store a reference to one of the states and using those state classes whenever the context requires would solve this too-much state conditional problem <br/>

The state objects must follow the same interface so that when the context transitions from one state to the other, the replacement of states can occur. <br/>

The State pattern is similar to the Strategy Pattern structurally, but the States can be aware of eaach others existence and transitions

## Structure
<li> The Context -> Original Object that utilizes the States </li>
<li> The IState -> The State Interface that all State Classes use so that state transitions can occur </li>
<li> The State Classes -> The State Classes which implements the State Interface and contains behaviours regarding the state that they represent </li>

## Code Examples