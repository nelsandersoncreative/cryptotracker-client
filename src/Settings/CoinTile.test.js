import React from 'react';
import ReactDOM from 'react-dom';
import { AppContext, AppProvider } from '../App/AppProvider';
import CoinTile from './CoinTile';
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';

describe('CoinTile Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AppProvider>
        <AppContext.Consumer>
          {({ coinList, addCoin, removeCoin, isInFavorites }) => {
            <CoinTile />
          }}
        </AppContext.Consumer>
      </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
