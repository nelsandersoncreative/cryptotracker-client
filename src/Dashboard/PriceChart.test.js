import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, AppContext } from '../App/AppProvider';
import PriceChart from './PriceChart';

describe('PriceChart Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AppProvider>
        <AppContext.Consumer>
          {({ historical, changeChartSelect }) => (
            <PriceChart />
          )}
        </AppContext.Consumer>
      </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
