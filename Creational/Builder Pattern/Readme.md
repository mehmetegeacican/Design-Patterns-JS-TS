# Builder Pattern
<li>Builder is a creational design pattern that lets you construct complex objects step by step.</li>
<li>The pattern allows you to produce different types and representations of an object using the same construction code.</li>
<li> It can be said that builder is a creational design pattern that allows you to initalize an object step by step </li>
<br/>

`Step by Step initialization is the key`

## Problem

<li> Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. </li>
<li> Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code. </li>
<li> You might make the program too complex by creating a subclass for every possible configuration of an object. </li>
<li> Builder pattern provides an approach for creating a class that doesn't include being have to create too many subclasses later </li>
<li> In constructor with too many parameters, not all might be needed at all times </li>
<br/>

`Builder pattern lets you construct objects step by steps`

## Solution

<li> The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders. </li> 
<li> Step by step initalization : buildWalls(), buildDoors()  </li>
<li> You don’t need to call all of the steps. Only the ones that you need </li>

## Structure

<li> 1 - The builder interface :  declares product construction steps that are common to all types of builders. </li>
<li> 2 - Concrete Builders : provide different implementations of the construction steps. Concrete builders may produce products that don’t follow the common interface. </li>
<li> 3 - Products - Result Objects </li>
<li> 4 - Director - Calls the order of the construction sets. has methods such as makeSportsCar(builder) </li>
<li> 5 - Client - Associattes one of the builder objects with client </li>

## Example Usages
This section is for real life examples where Builder pattern is used. Code example is in the js files.

## To run the code

Step 1 - install typescript with code  `npm install -g typescript` <br/>
Step 2 - Use tsc on the script.ts file to create a js version -- `tsc script.ts` <br/>
Step 3 - Run the js file with `node script.js` <br/>
<br/>

