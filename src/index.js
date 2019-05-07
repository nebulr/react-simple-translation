import { Component } from 'react';
import Store from './store';
import _ from 'lodash';
import uuidv1 from 'uuid/v1';

export default class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.id = uuidv1();
    this.state = Store.state;
    Store.set(this);
  }

  updateState(obj) {
    Store.state = _.merge({}, Store.state, obj);
  }

  componentWillUnmount() {
    Store.remove(this.id);
  }

  render() {
    return (
      this.props.children
    );
  }
}