import React, { useContext } from 'react';

import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import Page from '../Shared/Page';
import DashboardFill from './DashboardFill';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import PriceChart from './PriceChart';

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  width: 100%;
  grid-gap: 15px;
  grid-template-columns: 2fr 7fr;
  @media(max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default function() {
  const { coins } = useContext(AppContext);
  if (coins.length === 0) {
    return (
    <Page name="dashboard">
      <DashboardFill />
    </Page>
    )
  } else {
  return (
  <Page name="dashboard">    
    <h2>Select a coin to see price data:</h2>
    <PriceGrid />
    <ChartGrid>
      <CoinSpotlight />
      <PriceChart />
    </ChartGrid>
  </Page>
  )
}
};
