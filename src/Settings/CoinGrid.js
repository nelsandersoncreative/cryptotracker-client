import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`
function getLowerSectionCoins(coinList, filteredCoins) {
  return (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100);
}

function getCoinsToDisplay(coinList, topSection, favorites, filterCoins) {
  // console.log(coinList, 'coinList in getCoinsToDisplay'); //ALL COINS!
  // console.log(topSection, 'topSection in getCoinsToDisplay'); //true
  // console.log(favorites, 'favorites in getCoinsToDisplay'); //coinKey of favorite coins in favorite list
  // console.log(filterCoins, 'filterCoins in getCoinsToDisplay'); //undefined
  return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
}

export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({coinList, favorites, filteredCoins}) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey =>
            <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
          )}
        </CoinGridStyled>
        
      )}
    </AppContext.Consumer>
  )
}