import React from 'react';
import styled, {css} from 'styled-components';

//Coin image component whenever a coin logo image is displayed on a tile in the app

// CSS styling for Coin Image
const CoinImage = styled.img`
 height: 80px; 
 padding: 20px;
 padding-top: 40px;
 ${props => props.spotlight && css`
  height: 200px;
  margin: auto;
 `}
`

export default function({coin, spotlight}) {
  return <CoinImage
      spotlight={spotlight}
      alt={coin.Symbol}
      src={`https://cryptocompare.com/${coin.ImageUrl}`}
    />;
}
