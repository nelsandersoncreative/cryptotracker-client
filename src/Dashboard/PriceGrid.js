import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';

//PriceGrid Component - Grid for Coins in user coin list not featured in the coin spotlight (at the top row of the Dashboard component)

// CSS styling for Price Grid
const PriceGrid =  styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
  @media(max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default function() {
  return (
    <AppContext.Consumer>
      {({prices}) => (
        <PriceGrid>
          {prices.map((price, index) => (
            <PriceTile key={`priceTile-${index}`} index={index} price={price} />
          ))}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
}
