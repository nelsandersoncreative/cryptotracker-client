import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import Content from './Content';

//coinList prices firstVisit
describe('Content Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const coinList = { coinList: ["BTC"] }
    const prices = ["1"];
    ReactDOM.render(<AppProvider><Content coinList={coinList} prices={prices} /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
