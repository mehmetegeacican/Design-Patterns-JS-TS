# Command Design Pattern

Turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay,queue,undo a request’s execution

## Problem

Imagine you're building an application that have a lot of buttons with a lot of functions. Each of these buttons, while looking similar, are doing different things. In order to implement the various clickhandlers, you'll need many subclasses. This will later cause a massive problem. <br/> <br/>
Also, what if you needed certain functions of these buttons to be called in multiple places. For example, you'll need copy/paste functions to be called synchronously. What if you needed to duplicate the functionalities in many classes or make menus dependent on buttons?

## Solution

The Command pattern suggests that GUI objects shouldn't send these requests directly but should extract the request's details,`the object being called,history of the object`, into a separate command class with a single method that triggers this request. <br/> <br/>

Command objects serve as links between various GUI and business logic objects. the GUI object is nt obliged to know the details of business logic of the object and how it’ll be processed. The GUI object just triggers the command, which handles all the details.

## Structure

<li> 1-> Sender : Class that is responsible for initiating requests. this class must have a field for storing a reference to a command object </li>
<li> 2-> The Command: Interface that declares common methods for executing and undoing the commands </li>
<li> 3-> Commands: Classes that implement various requests. A command class is not  supposed to perform the work on its own, but rather to pass the call to one of the business logic objects </li>
<li> 4-> Receiver: Contains the business logic.Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work. </li>

## Code Example 
