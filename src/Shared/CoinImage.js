import React from 'react';
import styled, {css} from 'styled-components';

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
  console.log(coin.Symbol);
  return <CoinImage
      spotlight={spotlight}
      alt={coin.Symbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />;
}
