# React JS

<img src="https://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" width="250"/>

## Components, JSX and ReactDOM

### Components

Building a React app is all about **components**. A component is a **UI compoenent in an app**. A component is reusable because the markup, view logic, and styles is all housed in one place. 

### Creating components

There are two ways to create components: 
* As ES6 classes. It is the most popular style.
* Importting and using the React.createClass() method.

```js
// Using ES6 classes

import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
            <p>Hello, world!</p>
        );
    }
}
```

```js
// Using React.createClass

import React from 'react';

const HelloWorld = React.createClass({
    render() {
        return (
            <p>Hello, world!</p>
        );
    }
})
```

**Notes**:
* `render` is the only required method for a React Component. 
* React Components always start with uppercase letter. 

### JSX

React uses **JSX** (JavaScript eXtension sintax). It is a sintax extension for JavaScript written by Facebok. JSX enables us to write the markup for our components views in a familiar, HTML-like sintax. **Babel** transpiles ES6 code to ES5.  

Internally JSX is translate to:

```js
React.createElement('div', {className: 'ui items'},
    'This is a basic React component.'
)
```

### ReactDOM

ReactDOM instructs React to render components inside a specific DOM node. **ReactDOM.render** receives two arguments. The first argument is what we'd like to render. The second argument is where to render it. 

```js
import ReactDOM from 'react-dom';

ReactDOM.render(<Component />, document.getElementById('root'));
```

## Props and States

### Props

The way data flows from parent to child in React is through **props**. 

```js
// ProductList Component

import React from 'react';

class ProductList extends React.Component {
    render() {
        const product = {
            id: 1,
            name: 'Product Name'
        };

        return (
            <Product 
                key={product.id}
                name={product.name}
            />
        );
    }
}
```

```js
// Product Component

import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}
```

We are passing attributes to `Product` using a pair `[propName] = [propValue]`. The `{}` are delimeters, they say to JSX that what resides in-between them is a JS expression. Another delimeter is `''`, for example: `id='1'`.

In React, a component can access all its props through the object `this.props`. Inside the `Product` component, the `this.props` object will look like this: 

```js
{
    "id": 1, 
    "name": "Product Name"
}
```

Using `props` is how you create dynamic, data-driven React components. 

### Rendering multiple components

```js
import React from 'react';

class ProductList extends React.Component {
    render() {
        let products = [
            {id: 1, name: 'Product 1'},
            {id: 2, name: 'Product 2'}
        ];

        let productComponents = products.map((product) => {
            <Product 
                key={'product-' + product.id}
                name={product.name}
            />
        });

        return (
            <div>
                {productComponents}
            </div>
        );
    }
}
```

Here `productComponents` is an array of `Product` components, Babel will translate the array into regular JS. 

The `key={'product-' + product.id}` tells to React to create individual bindings for each instance of `Product`. 

### Creating dynamic interfaces

A child component like `Product` can't modify its props; `this.props` is immutable. A child does not own its props. The parent component owns the props given to a child. **React** favors the idea of **one-way data flow**; this means that the data changes come from the top of the app and are propagated downwards through its various components. 

To allow a child component to modify its props the parent component must send it a function as prop.

```js
// Parent component

import React from 'react';

class ProductList extends React.Component {
    handleTitleClick(productTitle) {
        console.log(productTitle + " was clicked!");
    }

    render() {
        const product = {
            id: 1,
            name: "Product 1"
        };

        return (
            <Product
                key={'product-' + product.id}
                name={product.name}
                onTitleClick={this.handleTitleClick} 
            />
        );
    }
}
```

```js
// Child component

import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.titleClicked = this.titleClicked.bind(this);
    }

    titleClicked() {
        this.props.onTitleClick(this.props.title)
    }

    render() {
        return (
            <div>
                <a onClick={this.titleClicked}>this.props.title</a>
            </div>
        );
    }
}
```

When the user clicks the product title:
1. React invokes `Product` component's `titleClicked`.  
2. `titleClicked` invokes its prop `onTitleClick`. This function lives inside the parent `ProductList` and logs a message to the console.

### Binding custom component methods

`This` has a different **binding** depending on the context. Inside `render()` we say that `this` is bound to the component - in other words, `this` references the component. 

To make `titleClicked()` references to the component we need to manually bind `this`. We do this by calling the constructor with the component props and creating the binding. 

### States

**States** are owned by the component instead by the parent. `this.state` is private to the component and it can be updated using `this.setState()`. 

> When the state of props of a component update, the compoment will re-render itself. 

```js
// Using states

import React from 'react';

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.setState({products: Seed.products});
    }

    render() {
        const productComponents = this.state.products.map((product) => {
            <Product
                key={'product-' + product.id}
                name={product.name}
            />
        });

        return (
            <div>
                {productComponents}
            </div>
        );
    }
}
```

It is good practice to initialize components with empty states. However, afer a component is initialized we want to seed the state. React specifies a set of **lifecycle methods**. React invokes `componentDidMount()` after a component is mounted to the page. 

In the example, we use `this.setState({products: Seed.products})` instead `this.state.products = Seed.products` because `this.setState` provides hooks to work asynchronous. 

### Using state and immutability

A component can modify its state, but we must treat `this.state` object as immutable. It is a bad practice modify the state directly, because `setState()` is asynchronous. 

```js
// Wrong ways to update an state

// Wrong way 1
this.state.products.push({id: 4, name: 'Product 4'});

// Wrong way 2
const products = this.state.products;
products.push({id: 4, name: 'Product 4'});
```

We can use `Array.concat()` or another function which generates a new array instead to point to `this.state.products`. 

```js
// Best ways to update an state

const products = this.state.products.concat({id: 4, name:'Product 4'});
this.setState({products: products});
```

To iterate over an array we can use `Array.map()`, because it returns a new array. We can use `Object.assign` to avoid mutate an object. We can't directly modify the object, because it still references to the original object inside the component state. 

```js
import React from 'react';

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({products: Seeds.products});
    }

    handleClick(productId) {
        const products = this.state.products.map((product) = {
            if (product.id === productId) {
                return Object.assign({}, product,  {
                    name: "Product Selected"
                })
            } else {
                return product;
            }
        });

        this.setState({products: products})
    }

    render() {

    }
}
```

### [Optional]: Refactoring

#### Property initializers

If you want to add **property initializers** to your project, you need to add `transform-class-properties`. Using `transform-class-properties` you can wrtie your component actions as **arrows functions**. 

```js
// Using transform-class-properties

class Product extends React.Component {
    handleUpVote = () => (
        this.props.onVote(this.props.id);
    );

    render() {
        // code
    }
}
```

```js
// Using transform-class-properties

class ProductList extends React.Component {
    state = {
        products: []
    };

    handleClick = (productId) => {
        const products = this.state.products.map((product) = {
            if (product.id === productId) {
                return Object.assign({}, product,  {
                    name: "Product Selected"
                })
            } else {
                return product;
            }
        });

        this.setState({products: products})
    };
}
```

With **Property initializers**:
* We can use arrow functions for custom components methods (and avoid having to bind `this`).
* We can define the initial state outside of `constructor()`.
