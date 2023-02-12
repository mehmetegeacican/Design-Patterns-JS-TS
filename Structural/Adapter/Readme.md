# Adapter Design Pattern
Adapter is a structural design pattern that allows incompatible objects (objects with incompatable interfaces) with collaborate

## Problem
What if you required one object to be understood from a different objects perspective? For example, what if you had integrated a 3rparty analytics library that only works with data in JSON format but later you required the library to also understand the XML format. <br/>
You could change the library to work with XML. However, this might break some existing code that relies on the library. And worse, you might not have access to the library’s source code in the first place, making this approach impossible.
## Solution
Create an adapter. This is a special object that converts the interface of one object so that another object can understand it.
Adapters can convert data into various formats and also help objects with different interfaces collaborate. <br/>
<li> The adapter gets an interface that is compatible with one of the existing objects.</li>
<li> The adapter passes the request to the second object in a format that the second object can understand. </li> <br/>

## Structure
<li> 1 - The Service --> Useful class that client can't use ddirectşy because of an incompatible interface </li>
<li> 2- The Adapter --> Class that is able to work both with client and service. IIt implements the client interface, while wrapping the service object. The adapter receives calls from the client via the adapter interface and translates them into calls to the wrapped service object in a format it can understand.</li>

## Class Adapter
<li> The adapter uses multiple inheritence to inherit both interfaces at the same time. This approach can only bee implemnted in languages that support multiple inheritence </li> <br/>

## Code Example
