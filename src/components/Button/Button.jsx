import * as React from 'react';
import { StoreConsumer } from '../../services/store';
import './Button.css';

const Button = ({ children }) => {
  return (
    <StoreConsumer>
      {({ actions }) => {
        return (
          <button
            className="Button"
            type="button"
            onClick={() => actions.incrementCounter()}
          >
            {children}
          </button>
        );
      }}
    </StoreConsumer>
  );
};

export default Button;
