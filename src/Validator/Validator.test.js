import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import Validator from './Validator';

describe('Validator Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppProvider><Validator /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
