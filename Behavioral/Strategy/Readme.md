# Strategy Design Pattern
Lets you define various algorithms in separate classes and allow their objects to manipulated by other algorithms as well (make objects interchangeable)
## Problem
Imagine you have an app that shows effective routes and good locations for touristic travelers.
At first this was designed only for casual travelers however as time passed, new types of tourists(cyclists,trackers etc) have started to become interested in this app.
Thus, you needed to updaet the algorithm that shows effective routes because this time, they should be focused on people who wants to do tracking, or they need to know the best bicycle route instead of touristic route. <br/>
How do you solve this algortihm adaptation problem in a way to handle complexity and later additions to the App?
## Solution
You take a specific class that deals with specific tasks in different ways (showTouristRoute(),showBicycleRoute()) and put all of these different ways(different algorithms) in separate classes. These classes are called `Strategies`

The original class,`Context`,stores the references to the strategies. The context lets the strategy classes to do the work rather than itself.
The client chooses the Strategy and Contect just uses the Class.

Since the Strategy pattern is loose coupled, the addition and retraction of strategies is relatively easier.
## Structure
<li> The Context: The navigator class that utilizes the Strategies </li>
<li> The IStrategy: The Strategy interface that all strategies implements </li>
<li> The Strategy classes:The Strategy classes that contains the algorithms </li> 

## Code Example