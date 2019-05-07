/**
 * Store - manage the state across the application.
 */
class Store {
  constructor() {
    this.__state = {};
    this.components = new Map();
  }

  set(component) {
    this.components.set(component.id, component);
  }

  remove(id) {
    this.components.delete(id);
  }

  __propagate() {
    for (let [id, component] of this.components.entries()) {
      component.setState(this.__state);
    }
  }

  set state(obj) {
    this.__state = obj;
    this.__propagate();
  }
  
  get state() {
    return this.__state;
  }
}

export default new Store();