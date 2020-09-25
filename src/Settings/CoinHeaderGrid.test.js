import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';

describe('CoinHeaderGrid Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppProvider><CoinHeaderGrid /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
