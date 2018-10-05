import * as React from 'react';
import { StoreConsumer } from '../../services/store';
import Button from './../Button/Button';
import './Header.css';

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <StoreConsumer>
        {({ state }) => <h2>Clicked {state.counter} times</h2>}
      </StoreConsumer>
      <Button>Click me</Button>
    </div>
  );
};

export default Header;
