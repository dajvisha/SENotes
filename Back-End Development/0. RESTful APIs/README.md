# RESTful APIs

### What are APIs?

An **Application Programming Interface** refere any method of communication between two entities of code. An API is a connection point that allow one application to talk to another. 

APIs are a great way for controlling the exposure of code, allowing internal functionalities of an application to be used from the outside world without exposing all of the internal code.

### Web APIs

Web APIs make it possible to invoke the execution of code on another machine via the Internet. A machine can use multiple Web APIs to create new applications, this is called a **Mashup**.

### Web APIs Protocols

Protocols are a set of rules to allow communication between computers. 

**The OSI Model**

The Open Systems Interconnection (OSI) model characterizes the communication functions of the computing system using standards protocols. 

The model partitions the communication system into abstraction layers:

* **Application**: Responsible for setting protocols like **HTTP**(Hyper Text Transfer Protocol), **IMAP**, **FTP**, **SSH**, **POP**.
* **Presentation**
* **Session**
* **Transport**
* **Network**
* **Data Link**
* **Physical**

When developing Web Applications or APIs developers focus on the Application Layer. 

We can add two layer more above the Application layer:

* **Message Formatting**
* **Web Service**

### Web Service Layer

The Web Service Layer refers to the protocols that can sit on top of the application layer and can determine the format in which APIs are sent and received. 

**SOAP**

One the most popular protocols in this layer is the **SOAP** (Simple Object Access Protocol). **SOAP** uses XML (extensible markup language) to transmit sets of information in the form of objects. 

**REST**

**REST** is an alternative to **SOAP**. It means **REpresentational State Transfer**, and it is more a set of styles and guidelines than a protocol. 

### Message Formatting

This layer contains the language that format the information we want to send or receive. These protocols focus mainly on the data structures that contain the information we want to communicate. 

There are two formats: **XML** (Exensible Markup Language) and **JSON** (JavaScript Object Notation).

### SOAP vs REST

**SOAP** 

* It was developed by Microsoft in 1998. 
* It must use XML for message format.
* It works with HTTP and other application layer protocols. 

**REST**

* It was published in the dissertation by Roy Thomas Fielding in 2000.
* It uses HTTP verbs to manage resources.
* It can use any type of message format.
* It has REST constraints. 

### XML vs JSON

**XML**

* It was developed in 1997.
* It uses identifying tags similar to HTML.

**JSON**

* It was developed in 2001.
* It derived from JavaScript.
* It can be condensed to reduce file size.

### REST Constraints

REST is more a set of guidelines than a protocol. It takes the HTTP protocol and applies a few constraints to clarify communication and resource management. 

**1. Client - Server**: Separates the client and the server entities. Clients send requests and servers send responses. 

**2. Stateless**: A stateful architecture remembers a client's activity between requests, the server remembers your activity throughout the duration of your time on the website. However, a RESTful architecture is not allowed to retain information about the state of another machine during the communication process. In a RESTful architecture, each request is independent. Using tokens you can have a stateless design while you create an experience that seems the server is remembering the user's state. 

**3. Cacheable**: Response messages from the server to the client are explicitly labeled as cacheable or non-cacheable. Responses can be cached by the client if the information on the server hasn't changed since the last request. 

**4. Uniform Interface**: RESTful architectures must have a uniform interface between all clients and servers. 

**5. Layered System**: A layered system means that a client can have access to an endpoint that relies on other endpoints without having to understand all the underlying implementations.

**6. Code on demand**: Send code from the server to the client for execution. 

### REST: Stateless

HTTP, HyperText Transfer Protocol, was designed under the constraints of the REST architectural style. Stateless means that the **server should not remember the state** of the application, the **client should send all information** necessary for execution along with each request. 

**Hypermedia** is the concept of sending a representation of a resource along with the controlls that lead to next steps. 

**Statelessness makes the Web scale**

There are three proporties induced by statelessness:

* **Visibility**: Every request contains all context necessary to understand it. 
* **Reliability**: Since a request stands on its own, failure of one reques does not influence others. 
* **Scalability**: The server does not have to remember the application state, enabling it to serve more requests in a shorter amount of time. 

**Clients handle application state, servers resource state**

There are two kinds of states:

* **Application state**: Resides in the client. It is information about where you are in the interaction. It is used during your session with an application.  
* **Resource state**: Resides in the server. 


## HTTP

HTTP can be described as pull protocol. Communication is initiated by the client sending an HTTP Request to the server, while the server responds with a response message. 

### HTTP Requests

HTTP menssage structure:

* **Header**
    * **Request Line** (HTTP Verb, URI, HTTP Version)
    * **Optional Request Headers**
* **Body**

**Example**:

```
GET puppies.html HTTP/1.1
Host: wwww.puppyshelter.com
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Content-Length: 35

puppyId=12345&name=Fido+Simpson
```

### HTTP Response

HTTP response message structure:

* **Header** 
    * **Status Line** (HTTP Version, Status Code, Reason Phrase)
    * **Optional Response Headers**
* **Body**
 
Example:

```
HTTP/1.1 200 OK
Date: Fri, 04 Sep 2015 01:11:12 GMT
Server: Apache/1.3.29 (Win32)
Last-Modified: Sat, 07 Feb 2014
ETag: "0-23-4024c3a5":
ContentType: text/html
ContentLength: 35
Connection: KeepAlive
KeepAlive: timeout=15, max=100

<h1>Welcome to the home page!</h1>
```

### HTTP verbs

The HTTP verbs are:

* **GET**: Read
* **POST**: Create
* **PUT**: Update/Create
* **PATCH**: Update
* **DELETE**: Delete

