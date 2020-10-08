import React from 'react';
import styled from 'styled-components';
import { DeletableTile } from '../Shared/Tile';

//CSS Styling for Coin Header Grid
export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

//CSS Styling for Coin Symbol on Tile
export const CoinSymbol = styled.div`
  justify-self: right;
`

//CSS Styling for Delete Icon on Coin Tile
const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`

// Component handling header for each Coin Tile
export default function({name, symbol, topSection}) {
  return <CoinHeaderGridStyled>
    <div> {name} </div>
    {
      topSection ? ( <DeleteIcon> X </DeleteIcon>) : 
    ( <CoinSymbol> {symbol} </CoinSymbol> )
    }
  </CoinHeaderGridStyled>
}
