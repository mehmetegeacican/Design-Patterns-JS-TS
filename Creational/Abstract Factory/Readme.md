# Abstract Factory

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their actual classes.

## Problem 
Imagine you have: <br/>
<li> A family of related products (Chair, Sofa etc) </li>
<li> Several variants of this family (Victorian era chair, modern chair etc) </li>
<br/>
<li> You need a way to create individual furniture objects so that they match other objects of the same family. </li>
<li> You don’t want to change existing code when adding new products or families of products to the program. </li>

## Solution 
<li> To explicitly declare interfaces for each distinct product of the product family (e.g., chair, sofa or coffee table). </li>
<li> Then you can make all variants of products follow those interfaces VictorianEraChair implements Chair interface </li>
<li> Then, declare Abstract Factory,an interface with a list of creation methods for all products that are part of the product family 
  (for example, createChair, createSofa and createCoffeeTable). <li>
These methods must return abstract product types represented by the interfaces we extracted previously: Chair, Sofa, CoffeeTable and so on.</li> </li>
<li> Then, For each variant of a product family, we create a separate factory class based on the AbstractFactory interface. </li>
<li> The client code has to work with both factories and products via their respective abstract interfaces. </li>

## Structure

<li> Abstract Products: declare interfaces for a set of distinct but related products which make up a product family. </li>
<li> Products : various implementations of abstract products, grouped by variants. Each abstract product (chair/sofa) must be implemented in all given variants </li>
<li> The Abstract Factory: an interface that declares common set of methods for creating each of the abstract products. </li>
<li> Factories: Actual factories that implement creation methods of the abstract factory. Each Concrete Factory creates its own specific product </li>

## Code examples
