# Go Lang

<img src="https://d1q6f0aelx0por.cloudfront.net/product-logos/81630ec2-d253-4eb2-b36c-eb54072cb8d6-golang.png" width="250"/>

## Why Go?

### Advantages of Go

1. Code run fast
2. Garbage collection
3. Simpler objects
4. Concurrency is efficient

### Software Translations

1. **Machine Language**: CPU instructions represented in binary. 
2. **Assembly Language**: CPU instructions with mnemonics:
    * Easier to read.
    * Equivalent to machine language.
3. **High Level Langauage**: Commonly used languages: C, C++, Java, Python, Go, etc. 
    * Much easier to use. 

> All software must be translated into the machine language of processor. 

### Compiled vs Interpretations

1. Compiled code is faster.
2. Interpreters make coding easir:
    * Manage memory automatically
    * Infer variable types. 

> **Go** is a compiled language, but it keeps good features from interpreted languages. 

#### Compilation
Translate instructions once before running the code.
* C, C++, Java (partially).
* Translation occurs only once, saves time. 

#### Interpretation 
Translate instructions while the code is in execution.
* Python, Java (partially).
* Translate occurs every execution.
* Requires an interpreter. 


### Object-Oriented Programming Language

#### Object-Oriented Programming

1. Organizes code thorugh **encapsulation**: Group together data and functions which are related using a `class`.
2. Allows you to create specifically objects for your application.

### Go is weakly Object-Oriented Programming

1. **Go** does not uses a `class` it uses `structs` with associated methods. 
2. In **Go** you do not have: **Inheritance**, **Constructors**, **Generics**.

### Concurrency

One of the advantages of **Go** is its concurrency implementation. 

#### Performance Limitations

1. **Moore's Law** used to help performance. *Number of transistors double every 18 months*.

#### Concurrent Programming

* **Concurrency** is the management of of multiple tasks at the same time. 
* **Concurrency** is a requirement for large systems.
* **Concurrent Programming** enables *parellelism*:
    * Management of task execution.
    * Communication between tasks.
    * Synchronization between tasks.

#### Concurrency in Go

* **Go** includes concurrency primitives.
* **Gorutines** represent concurrent tasks.
* **Channels** are used to communicate between tasks.
* **Select** enables task synchronization.

## Wokspaces and Packages

### Workspaces

A **Workspace** is where you are organize your go files. The workspace has a **directory hierarchy**, becuase common organization is good for sharing. Inside you workspace you can define the following structure:

* **src** - contains source code files.
* **pkg** - contains packages. 
* **bin** - contains exectuables. 

### Package

A Package: 

* Is a group of related source files. 
* Each package can be imported by other packages.
* Enables software reuse. 
* There must be a `main` package.

## Hello world from Go!

```go
package main 

import "fmt"

func main() {
    fmt.Printf("Hello world from Go!\n")
}
```

`import` keyword is used to access other packages like `fmt`. 

### Go tools

* `go build` - compiles the program. 
* `go doc` - prints documentation for a package. 
* `go fmt` - formats source code files. 
* `go get` - downloads packages and install them. 
* `go list` - lists all installed packages. 
* `go run` - compiles .go files and runs the executables. 
* `go test` - run tests using files ending in "_test.go"

## Go Basics

### Variables and Types

```go
// Variable declaration
var x int

// Type declaration
type Celsius float64
var temp Celsius

// Initialize variables in the declaration
var x int = 100
var x = 100 

// Initialize variables after the declaration
var x int
x = 100

// Short variable declaration (declaration and initialization together)
x := 100
```

### Pointers and `new()`

A **pointer** is an address to data in memory. There are two operators associated with pointers:

* `&` operator - returns the address of a function or variable.
* `*` operator - returns data at an address (dereferencing). 

The `new()` function is an alternative way to create a variable. It creates a variable and returns a pointer to the variable. 

```go
// Pointer example
var x int = 1
var y int
var ip *int // ip is pointer to int

ip = &x // ip points to x
y = *ip // y is now 1

// new() example
ptr := new(int)
*ptr = 3
```
