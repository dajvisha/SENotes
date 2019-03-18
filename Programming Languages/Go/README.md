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

### Printing

```go
name := "Diego"

fmt.Printf("Hello " + name)
fmr.Printf("Hello %s", name)
```

### Type conversion

```go
var x int32 = 1
var y int64 = 2
x = int32(y)
```

### Data Types: Int

```go
var x int
```

There are different lenghts for `int`:
* `int8`
* `int16`
* `int32`
* `int64`
* `uint8`
* `uint16`
* `uint32`
* `uint64`

Binary operators:
* Arithmetic: `+`, `-`, `*`, `/`, `%`, `<<`, `>>`
* Comparison: `==`, `!=`, `>`, `<`, `>=`, `<=`
* Boolean: `&&`, `||`

### Data Type: Floating Point

```go
var x float32 = 123.45
var x float64 = 1.2345e2 
```

There are different lenght for `float`:
* `float32` - 6 digits of precision
* `float64` - 12 digits of precision

You also can declare complex numbers.

```go
var x complex128 = complex(2, 3)
```

### Data Type: String

```go
x := "Hi there"
```

A string is a sequence of arbitry bytes, and it is read only. 

#### UNICODE Package

```go
// Test categories of run
IsDigit(r rune)
IsSpace(r rune)
IsLetter(r rune)
IsLower(r rune)
IsPunct(r rune)

// Perform conversions
ToLower(r rune)
ToUpper(r rune)
```

#### String Package

```go
// Compare strings
Compare(a, b)
Contains(s, substr)
HasPrefix(s, prefix)
Index(s, substr)

// String manipulation
Replace(s, old, new, n)
ToLower(s)
ToUpper(s)
TrimSpace(s)
```

#### Strconv Package

```go
Atoi(s) 
Itoa(s)
FormatFloat(f, fmt, prec, bitSize)
ParseFloat(s, bitSize)
```

### Constants

A `constant` is an expression whose value is known at compile time. 

```go
const x = 1.3
const (
    y = 4
    z = "Hi"
)
```

#### Iota

Generates a set of related bu distinct constants. Often represents a property which has several distinct possible values. For example: Days, Months.

```go
type Grade int
const (
    A Grade = iota
    B
    C
    D
    F
)
```

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

### Variables Scope

A **variable scope** is the place in code where a variable can be accessed. 

```go
// Global variable

var x = 4

func f() {
    fmt.Printf("%d", x)
}

func g() {
    fmt.Printf("%d", x)
}
```

```go
// Local variable

func f() {
    var x = 4
    fmt.Printf("%d", x)
}

func g() {
    fmt.Printf("%d", x)
}
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

### Deallocating memory

When a varible is not longer needed, it should be **deallocated**.

#### Stack and Heap.

**Stack** is the area of memory dedicated to function calls. Local variables are stored in the **stack**. Deallocated after function completes. **Heap** is the percisten region of memory, you need to explicit deallocate memory from the heap. 

#### Garbage Collection

It is hard to determine when a variable is no longer in use. **Garbage collection** is an automatic tool which deals with memory deallocating. In an interpreted language garbage collection is done by the interpreter. 

> **Go** is a compiled language which enables garbage collection. 

In **Go** the compiler determines where to store, in the stack or in the heap. 

```go
// How to work with pointers in Go

package main 

import "fmt"

func foo() *int {
    x := 1
    return &x
}

func main() {
    var y *int
    y = foo()
    fmt.Printf("%d", *y)
}
```

### Controll Structures

#### If

```
if <condition> {
    <consequent>
}
```

```go
if x > 5 {
    fmt.Printf("Yup")
}
```

#### For Loops

```
for <init>; <cond>; <update> {
    <stmts>
} 
```

```go
// Example 1
for i := 0; i < 10; i++ {
    fmt.Printf("Hi")
}

// Example 2
i := 0
for i < 10 {
    fmt.Printf("Hi")
    i++
}

// Example 3

for {
    fmt.Printf("Hi")
}
```

#### Switch / Case

```go
switch x {
    case 1:
        fmt.Printf("case 1")
    case 2:
        fmt.Printf("case 2")
    default:
        fmt.Printf("nocase")
}
```

#### Tagless Switch

```go
switch {
    case x > 1:
        fmt.Printf("case 1")
    case x < -1:
        fmt.Printf("case 2")
    default:
        fmt.Printf("nocase")
}
```

#### Break and Continue

```go
// Break example
for i := 0; i < 10; i++ {
    if i == 5 {
        break
    }
    fmt.Printf("Hi")
}
```

```go
// Continue example
for i := 0; i < 10; i++ {
    if i == 5 {
        continue
    }
    fmt.Printf("Hi")
}
```

#### Scan

```go
var apples int

fmt.Printf("Number of apples?")
num, err := fmt.Scan(&apples)

fmt.Printf(apples)
```

### Arrays

An array is a fixed-length series of elements of a chosen type. 

```go
// Declaring an array
var x [5]int

// Accessing a particular element
x[0] = 2
fmt.Printf(x[1])

// Array literal
var x [5]int = [5]{1, 2, 3, 4, 5}
y := [...]int{1, 2, 3, 4}
```

```go
// Iterate over arrays
x := [3]int{1, 2, 3}

for i, v range x {
    fmt.Printf("ind %d, val %d", i, v)
}
```

### Slices

An **slice** is a windows on an **underlying array**. An array has three elements:

* **Pointer** - indicates the start of the slice.
* **Lenght** - is the number of elts in the slice.
* **Capacity** - is maximum number of elts. 

```go
arr := [...]string{"a", "b", "c", "d", "e", "f", "g"}

// Slices
s1 := arr[1:3] // Includes "b", "c"
s2 := arr[2:5] // Includes "c", "d", "e", "f"

// Accessing slices
fmt.Printf(s1[1]) // Result: "c"
fmt.Printf(s2[0]) // Result: "c"
```

#### Slice functions

* `len()` - function returns the length.
* `cap()` - function returns the capacity.

```go
a1 := [3]string{"a", "b", "c"}

s1 := a1[0:1]

fmt.Printf(len(s1)) // Result: 1
fmt.Printf(cap(s1)) // Result: 3
```

#### Slice literals

```go
s1 := []int{1, 2, 3}
```

### Variable Slices

#### `make()`

The function `make()` creates a slice (and array). It could receive two or three arguments:

* **type** and **capacity**.
* **type**, **capacity** and **length**.

```go
// Creating an slice using make(), specifing type and capacity
sl := make([]int, 10)

// Creating an slice using make(), specifing type, capacity and length
sl := make([]int, 10, 15)
```

#### `append()`

The slice's size could be increased by `append()`. Adds elements to the end of the slice, and inserts into underlying array. It increases length of the array if necesary. 

```go
sl := make([]int, 0, 3)
sl = append(sl, 100)
```
