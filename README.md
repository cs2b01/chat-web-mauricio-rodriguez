# Uniform Interface

* The Uniform Interface refers to a **standard** way to do something regardless of what the specific activity is. 
* Software Engineering **principle of generality** applied to interface component of a component in distributed system.
* A **consistent**, **predictable** way to query data and **exercise** actions regardless of the application domain.

![](https://github.com/cs2b01/uniform-interface/blob/master/connector.png)

## What is Uniform Interface?
> The central feature that distinguishes the REST architectural style from other network-based styles is its emphasis on a uniform interface between components. By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. Implementations are decoupled from the services they provide, which encourages independent evolvability. The trade-off, though, is that a uniform interface **degrades efficiency** , since **information is transferred in a standardized** form rather than one which is specific to an application's needs. The REST interface is designed to be efficient for large-grain hypermedia data transfer, optimizing for the common case of the Web, but resulting in an interface that is not optimal for other forms of architectural interaction. [https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm] 

![](https://github.com/cs2b01/uniform-interface/blob/master/ui3.png)

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


### Create
``` python
@app.route('/users', methods = ['POST'])
def create_user():
    c =  json.loads(request.form['values'])
    user = entities.User(
        username=c['username'],
        name=c['name'],
        fullname=c['fullname'],
        password=c['password']
    )
    session = db.getSession(engine)
    session.add(user)
    session.commit()
    return 'Created User'
```

### Read
``` python
@app.route('/users', methods = ['GET'])
def get_users():
    session = db.getSession(engine)
    dbResponse = session.query(entities.User)
    data = dbResponse[:]
    return Response(json.dumps(data, cls=connector.AlchemyEncoder), mimetype='application/json')
```
### Update
``` python
@app.route('/users', methods = ['PUT'])
def update_user():
    session = db.getSession(engine)
    id = request.form['key']
    user = session.query(entities.User).filter(entities.User.id == id).first()
    c =  json.loads(request.form['values'])
    for key in c.keys():
        setattr(user, key, c[key])
    session.add(user)
    session.commit()
    return 'Updated User'
```

### Delete
``` python
@app.route('/messages', methods = ['DELETE'])
def delete_message():
    id = request.form['key']
    session = db.getSession(engine)
    messages = session.query(entities.User).filter(entities.User.id == id)
    for message in messages:
        session.delete(message)
    session.commit()
    return "Deleted Message"
```
## Referencias.
1.  [https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm]
2.  [https://en.wikipedia.org/wiki/Create,_read,_update_and_delete]
3.  [https://www.mulesoft.com/resources/api/what-is-an-api]
4.  [https://github.com/cs2b01/uniform-interface/blob/master/ebook-UndisturbedREST_v1.pdf]
### Install SQLAlchemy
```
pip install sqlAlchemy
pip3 install sqlAlchemy
```
