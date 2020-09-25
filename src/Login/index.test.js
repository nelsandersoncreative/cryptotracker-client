import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import Register from './index';

describe('Register Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppProvider><Register /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
