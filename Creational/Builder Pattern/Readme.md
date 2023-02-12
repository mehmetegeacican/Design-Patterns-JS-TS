# Builder Pattern
<li>Builder is a creational design pattern that lets you construct complex objects step by step.</li>

`Step by Step initialization is the key`

## Problem

<li> Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. </li>
<li> Such initialization code is usually buried inside a gigantic constructor.</li>
<li> You might make the program too complex by creating a subclass for every possible configuration of an object. `This is not preffered` </li>
<li> Constructor with too many parameters, not all might be needed at all times and might be very problematic </li>
<br/>

`Builder pattern lets you construct objects step by steps`

## Solution

<li> The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders. </li> 
<li> Step by step initalization : buildWalls(), buildDoors()  </li>
<li> You don’t need to call all of the steps. Only the ones that you need </li>

## Structure

<li> 1 - The builder interface :  declares common product construction steps for all types of builders. </li>
<li> 2 - Builders : Actual classes provide different implementations of the construction steps. Concrete builders may produce products that don’t follow the common interface. </li>
<li> 3 - Products - Result Objects </li>
<li> 4 - Director - Calls the order of the construction sets. has methods such as makeSportsCar(builder) </li>


## Example Usages
This section is for real life examples where Builder pattern is used. Code example is in the js files.


