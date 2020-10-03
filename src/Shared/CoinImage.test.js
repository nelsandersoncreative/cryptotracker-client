import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import CoinImage from './CoinImage';

describe('CoinImage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const coin = { coinSymbol: '../../assets/cryptotracker-dashboard'};
    ReactDOM.render(<AppProvider><CoinImage coin={coin} /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
