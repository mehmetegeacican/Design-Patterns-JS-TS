# Chain Of Responsibility

Lets you chain handles that executes certain requests. A handler decides whether to process the request or pass it to the next handler.
`Request -> canProcess? process : pass it to next handler`

## Problem

Think of an online ordering system. You'll need to havve restriictions on whether a user can make an orderor not. <br/>
Firstly, The user must be authenticated. <br/>
Secondly, the user must be authorized to make an order. <br/>
Thirdly, the user must loaded the amount of money required for order. <br/>
Only if these conditions are satisfied, then the user can make an order. If The user is not authenticated, then there is no need to pass to the second step. <br/>

You can also add another handlers for the ordering action. Think of a handler in which the user has to prove that he/she is not a robot. <br/>

## Solution

Chain of Responsibility extracts particular behaviors to separate objects. These objects are called `Handlers`. The request is passed as a parameter to the handlers.

## Structure

<li> IHandler -> The Handler interface that declares all the common operations for handlers </li>
<li> Handlers -> The Actual Handler classes that implement the interface. There is a base handler : The Parent, and the child handlers: The child classes </li>

## Code Examples
