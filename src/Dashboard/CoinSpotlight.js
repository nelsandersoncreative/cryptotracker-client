import React from 'react';
import styled from 'styled-components';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';


// CSS styling for SpotlightName
const SpotlightName = styled.h2`
  text-align: center;
  font-size: 40px;
  @media(max-width: 750px) {
    font-size: 20px;
    width: 100%;
  }
`

// The Left column of PriceGrid Component
export default function() {
  return (
    <AppContext.Consumer>
      {({currentFavorite, coinList}) => 
        <Tile>
          <SpotlightName> {coinList[currentFavorite].CoinName} </SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]}/>
        </Tile>
      }
    </AppContext.Consumer>
  )
}
