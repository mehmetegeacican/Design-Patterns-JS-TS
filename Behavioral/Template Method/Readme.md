# Template Method Design Pattern
Allows the skeleton of algorithm to be defined in parent class,meanwhile allowing child classes to override the 
specific parts of algorithms nd protecting the structure of the very same algorithm.

## Problem
Say that you have a exporting algorithm that is designed for csv,excel and pdf formats. Exxporting these type of datas, while each algortihm having
their distinct designs for the data format, is mainly similar. How can we reduce code duplcation and increase the efficiency in this situation? <br/>
Also, the function will have a lot of conditionals in the code.

## Solution
Turn each step of the algorithm into methods,these methods can be abstract or default, and use each of these methods in `Template` method.
Client, provides a subclass for a child class that requeires alteration of some of the methods. E.g:DataMiner, PDFDataMiner...

## Structure
<li>Abtract Parent Class --> The Client Class that contains the template method, Template method contains the algorithm steps that can either be implemented as default functions or abstract functions </li>
<li>Actual Child Class --> The child class that extends the Abstract class and overrides specific steps based on its requirements </li>

## Code Examples