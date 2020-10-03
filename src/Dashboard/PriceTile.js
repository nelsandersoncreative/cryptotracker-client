import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';
import { AppContext } from '../App/AppProvider';

// Component for coin tiles in user dashboard

//css styling for justification of text on different coin tiles
const JustifyRight = styled.div`
  text-align: right;
`

const JustifyLeft = styled.div`
  text-align: left;
`

const TickerPrice = styled.div`
  ${fontSizeBig};
`
const ChangePct = styled.div`
  color: green;

  ${props => props.red && css`
    color: red;
  `}
`

// format price data numbers
const numberFormat = number => {
  return +(number + '').slice(0, 7);
}

// CSS styles for price tiles
const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    display: grid;
    ${fontSize3}
    grid-gap: 5px;
    grid-template-columns: 1fr auto 1fr;
    justify-items: right;
  `}

  ${props => props.currentFavorite && css`
    ${greenBoxShadow}
    pointer-events: none;
  `}
`

// Handle percentage change in coin prices
function ChangePercent({data}) {
  return (
    <JustifyRight> 
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifyRight>
  );
}

// Top row of price tiles in upper section of user dashboard when 2 rows exist
function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} currentFavorite={currentFavorite}>
      <CoinHeaderGridStyled>
        <JustifyLeft><div> {sym} </div></JustifyLeft>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TickerPrice>
        ${numberFormat(data.PRICE)}
      </TickerPrice>
    </PriceTileStyled>
  )
}

// Bottom row of Compact price tiles in upper section of user dashboard when 2 rows exist
function PriceTileCompact({ sym, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled compact onClick={setCurrentFavorite} currentFavorite={currentFavorite}>
        <JustifyLeft> {sym} </JustifyLeft>
        <ChangePercent data={data} />
      <div>
        ${numberFormat(data.PRICE)}
      </div>
    </PriceTileStyled>
  )
}

export default function ({price, index}) {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact;
  return (
    <AppContext.Consumer>
      {({currentFavorite, setCurrentFavorite}) => 
        <TileClass 
          sym={sym} 
          data={data} 
          currentFavorite={currentFavorite === sym}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
          >  
        </TileClass>
      }
    </AppContext.Consumer>
  )
}
