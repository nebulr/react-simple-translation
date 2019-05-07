# React Component State

Updates the state locally when that same value changes in another component. Simply need to use the following instead of the default react component and use `updateState` instead of `setState` :

```
import Component from 'react-component-state';

export default class Thing1 extends Component {
  render() {
    return (
      <div>{this.state.counter}</div>
    )
  }
}

...

import Component from 'react-component-state';

export default class Thing2 extends Component {
  state = {
    counter: 0
  };
  constructor(props) {
    super(props);
    this.updateCounter = this.updateCounter.bind(this);
  }
  updateCounter() {
    this.updateState({ counter : this.state.counter + 1 })
  }
  render() {
    <button onClick={this.updateCounter}>Click me!</button>
  }
}

...

import { Component } from 'react';
import Thing1 from './thing1';
import Thing2 from './thing2';

export default class App extends Component {
  render() {
    <Thing1 />
    <Thing2 />
  }
}
```