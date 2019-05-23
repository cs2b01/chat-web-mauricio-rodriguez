# Uniform Interface

![alt text][motivation]

[motivation]: https://github.com/cs2b01/uniform-interface/blob/master/connector.png "Motivation"

## Problem


## Solution
![alt text][ui]

[ui]: https://github.com/cs2b01/uniform-interface/blob/master/ui3.png "Uniform Interface"

* The Uniform Interface refers to a **standard** way to do something regardless of what the specific activity is. 

* Software Engineering **principle of generality** applied to interface component of a component in distributed system.

* A **consistent**, **predictable** way to query data and **exercise** actions regardless of the application domain

 
## CRUD

| URI        | METHOD           | RQ Body  |Result  |
| ------------- |:-------------:| -----:| -----:|
| /users      | GET | empty | **returns** all users |
| /users      | POST | user | new user **created** |
| /users/<id> | GET | empty | **returns** a single user |
| /users/<id> | PUT | user | user **updated**  |
| /users/<id> | DELETE | empty | user **deleted** |




## What is Uniform Interface?
> The central feature that distinguishes the REST architectural style from other network-based styles is its emphasis on a uniform interface between components. By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. Implementations are decoupled from the services they provide, which encourages independent evolvability. The trade-off, though, is that a uniform interface **degrades efficiency** , since **information is transferred in a standardized** form rather than one which is specific to an application's needs. The REST interface is designed to be efficient for large-grain hypermedia data transfer, optimizing for the common case of the Web, but resulting in an interface that is not optimal for other forms of architectural interaction. [https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm] 

## Advantages
* Simplified Architecture
* Improved visibility of interactions
* Decoupled components
* Improved interoperability: Reduces the cost of integration

## Disadvantages
* Degraded efficiency

### Install SQLAlchemy
```
pip install sqlAlchemy
pip3 install sqlAlchemy
```
