import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import ConfirmButton from './ConfirmButton';

describe('ConfirmButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppProvider><ConfirmButton /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
