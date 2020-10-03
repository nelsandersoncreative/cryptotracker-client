import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';

describe('PriceTile Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
    <AppProvider>
      <AppContext.Consumer>
      {({ prices, currentFavorite, setCurrentFavorite }) => (
        [1, 2].map((price, index) => {
        <PriceTile key={`priceTile-${index}`} index={index} price={price} />
        })       
      )}
      </AppContext.Consumer>
    </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
