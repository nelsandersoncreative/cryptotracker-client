import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './AppProvider';
import AppBar from './AppBar';


describe('AppBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(<AppProvider><AppBar /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
