import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import CoinSpotlight from './CoinSpotlight';
import ChartGrid from './index';
import PriceGrid from './PriceGrid';
import Page from '../Shared/Page';

describe('CoinSpotlight Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <AppProvider>
      <Page name="dashboard">    
        <ChartGrid>
          <CoinSpotlight />
          <PriceGrid />
      </ChartGrid>
    </Page>
    </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);

  });
});



    
    