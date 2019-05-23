# Uniform Interface

![alt text][motivation]
[motivation]: https://github.com/cs2b01/uniform-interface/blob/master/connector.png "Motivation"

* The Uniform Interface refers to a **standard** way to do something regardless of what the specific activity is. 
* Software Engineering **principle of generality** applied to interface component of a component in distributed system.
* A **consistent**, **predictable** way to query data and **exercise** actions regardless of the application domain

## What is Uniform Interface?
> The central feature that distinguishes the REST architectural style from other network-based styles is its emphasis on a uniform interface between components. By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. Implementations are decoupled from the services they provide, which encourages independent evolvability. The trade-off, though, is that a uniform interface **degrades efficiency** , since **information is transferred in a standardized** form rather than one which is specific to an application's needs. The REST interface is designed to be efficient for large-grain hypermedia data transfer, optimizing for the common case of the Web, but resulting in an interface that is not optimal for other forms of architectural interaction. [https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm] 

![alt text][ui]
[ui]: https://github.com/cs2b01/uniform-interface/blob/master/ui3.png "Uniform Interface"

## Advantages
* Simplified Architecture
* Improved visibility of interactions
* Decoupled components
* Improved interoperability: Reduces the cost of integration

## Disadvantages
* Degraded efficiency

 
## CRUD

> In computer programming, create, read, update, and delete (CRUD) are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete. CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information; often using computer-based forms and reports. [https://en.wikipedia.org/wiki/Create,_read,_update_and_delete]


| URI        | METHOD           | RQ Body  |Result  |
| ------------- |:-------------:| -----:| -----:|
| /users      | GET | empty | **returns** all users |
| /users      | POST | user | new user **created** |
| /users/<id> | GET | empty | **returns** a single user |
| /users/<id> | PUT | user | user **updated**  |
| /users/<id> | DELETE | empty | user **deleted** |






### Install SQLAlchemy
```
pip install sqlAlchemy
pip3 install sqlAlchemy
```
