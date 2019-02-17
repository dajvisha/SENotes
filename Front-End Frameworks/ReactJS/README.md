# React JS

## Components, JSX and ReactDOM

### Components

Building a React apps is all about **components**. There are two ways to create components: 
* As ES6 classes. It is the most popular style.
* Importting and using the createReactClass() method

```js
import React from 'react';

class HelloWorld exteds React.Component {
    render() {
        return (
            <p>Hello, world!</p>
        )
    }
}
```

```js
import React from 'react';
const HelloWorld = React.createClass({
    render() {
        return (
            <p>Hello, world!</p>
        )
    }
})
```

**Note**: React Components always start with uppercase letter. 

### JSX

React uses **JSX** (JavaScript eXtension sintax). It is a sintax extension for JavaScript written by Facebok. JSX enables us to write the markup for our components views in a familiar, HTML-like sintax. **Babel** transpile ES6 code to ES5.  

Internally JSX is translate to:

```js
React.createElement('div', {className: 'ui items'},
    'This is a basic React component.'
)
```

### ReactDOM

ReactDOM instruct React to render components inside a specific DOM node. **ReactDOM.render** receives two arguments. The first argument is what we'd like to render. The second argument is where to render it. 

```js
import ReactDOM from 'react-dom';

ReactDOM.render(<Component />, document.getElemntById('root'));
```
