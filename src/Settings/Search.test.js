import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import Search from './Search';

describe('Search Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppProvider><Search /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
