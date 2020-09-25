import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AppContext, AppProvider } from '../App/AppProvider';
import CoinGrid from './CoinGrid';
import Welcome from './WelcomeMessage';
import Search from './Search';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';

describe('CoinGrid Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AppProvider>
        <AppContext.Consumer>
        {({coinList, favorites, filteredCoins}) => (
              <CoinGrid topSection />
          )}
        </AppContext.Consumer>
      </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
