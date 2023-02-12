# Proxy Pattern
Proxy is a design pattern that allows you to use a substitute for an object instead of the actual object.A proxy controls access to the original object, allowing you to perform an operation before or after the request gets through to the original object.

## Problem 
You have an object that you do need to use for specific times, but not all the time <br/>
`You could implement lazy initialization: create this object only when it’s actually needed` However, for this, all of the object's clients would need to use an initialization code, thus creating a code duplication problem. <br/>
In an ideal world, we’d want to put this code directly into our object’s class, but that isn’t always possible. For instance, the class may be part of a closed 3rd-party library.

## Solution
The proxy pattern lets you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.
The proxy can be thought of as a midway between a client and a database, It can handle lazy initialization and caching without client knowing or without having to access db over and over again

## Structure
<ul>
  <li>The Service Interface: The proxy must implement this interface </li>
  <li>The Service: The service that handles the operations </li>
  <li>The Proxy: References to the service. After the proxy finishes its processing,(Lazy init, eg.) It passes the request to the service object </li>
  <li>The Client: Uses the proxies and the services </li>
</ul>

## Code Examples
Certain Libraries that fetches the data from a distant db uses proxy as well. 
