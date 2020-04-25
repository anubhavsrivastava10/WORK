# REST API and POSTMAN

### What is REST? 
Representaional State Transfer describes an architeactural style for web Services. REST consists of a set of standards or constraints for sharing data between different systems and systems that implement REST are known as RESTful.

### What is API? 
API is an Application Programming Interface which is ann interface that allows software programs to communicate with eachother.

### What is RESTful API ?
RESTful API is simply an API that adheres to the principles and constraints of REST. A server receives a request through a URL endpoint and sends a response whuch is often data in a JSON format.
### Guiding constraints define the REST architecture 
**Uniform Interface**: The interface of components must be the same. This means using the URI standard to identify resources—in other words, paths that could be entered into the browser's location bar.
**Client-Server**: There is a separation of concerns between the server, which stores and manipulates data, and the client, which requests and displays the response.
**Stateless Interactions**: All information about each request is contained in each individual request and does not depend on session state.
**Cacheable**: The client and server can cache resources.
**Layered System**: The client can be connected to the end server, or an intermediate layer such as a load-balancer.
**Code on Demand** (Optional): A client can download code, which reduces visibility from the outside.

### HTTP and HTTP Methods
HTTP is the method of communication between the client and the server. When you go to a URL on the web, you are actually doing a GET request on that specific resource, and the website you see is the body of the response.
HTTP works by opening a TCP connection to a server port to make a request, and the listening server responds with a status and a body.

_**A request must consist of a URL, a method, header information, and a body.**_

#### HTTP request methods loosely correspond to the paradigm of CRUD, which stands for Create, Update, Read, Delete.

Operation | Command | Description | Success Code
----------|---------|-------------|-------------
READ | GET | Retrieves a resource | 200(OK)
CREATE | POST | Creates a new resource | 201(CREATED)
UPDATE | PUT | Update an existing resource | 200(OK)
DELETE | DELETE | Delete a rosource | 200(OK), 202(ACCEPTED), 204(NO CONTENT)

#### Five Status code that each contain a range of response

Code | Meaning
-----|--------
1xx | Information
2xx | Success
3xx | Redirection
4xx | Client Error
5xx | Server Error

#### For Postman API practice goto 
[reqres] (https://reqres.in/)