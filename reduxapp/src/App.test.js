import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});