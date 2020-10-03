import React from 'react';
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

// Coin Tile Component found in both the Favorites list and the search list (CoinGrid)

// function handling adding/removing coins from favorites list
function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => {
    removeCoin(coinKey)
  } : () => {
    addCoin(coinKey);
  }
}

export default function({coinKey, topSection}) {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        let coin = coinList[coinKey];

        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinKey)) {
          TileClass = DisabledTile;
        }

        return <TileClass onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
          <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
          <CoinImage coin={coin} />
        </TileClass>
      }}
    </AppContext.Consumer>
  )
}
