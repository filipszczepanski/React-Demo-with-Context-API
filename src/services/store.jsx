import React, { PureComponent, createContext } from 'react';

const { Provider, Consumer } = createContext({});
export class StoreProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = props.initState || {};
    this.actions = this._connectActions(props.actions || {});
  }
  
  _connectActions(actions) {
    return Object.keys(actions).reduce((connected, actionName) => {
      connected[actionName] = () => this.setState(actions[actionName]);
      return connected;
    },{});
  }

  render() {
    const { state, actions } = this;
    return (
      <Provider value={{ state, actions }}>
        {this.props.children || null}
      </Provider>
    );
  }
}

export const StoreConsumer = Consumer;
