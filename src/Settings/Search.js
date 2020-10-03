import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import { AppContext } from '../App/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

// Search Bar Component for Searching Coins Using Cryptocompare found in Settings Component

// CSS Styling for Search results grid
const SearchGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 75px;
`

// CSS Styling for Search Label
const SearchLabel = styled.div`
  width: 270px;
  @media(max-width: 780px) {
    text-align: center;
  }
`

// CSS Styling for Search Input
const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  height: 50px;
  width: 500px;
  padding: 10px;
  font-family: var(--font-family);
  font-size: 35px;
  color: var(--success-color);
  place-self: center left;
  @media(max-width: 780px) {
    place-self: center;
    width: 90%;
  }
`
//creates an array of elements split into groups the length of size
// takes in the search term, the list of coins from API and a function to set filtered coins (setFilteredCoins found in context - AppProvider
const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {

  // Get all the coin symbols
  let coinSymbols = Object.keys(coinList);

  // Get all the coin names, map symbol to name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
      let coinName = result.CoinName;
      return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    });
    setFilterCoins(filteredCoins);
}, 500);

// handles the search of the coinList obtained from the CryptoCompare API by filtering out coins relating to the search
function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

// Search Bar Component for Searching Coins Using Cryptocompare found in Settings Component
export default function() {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) =>
        <SearchGrid> 
          <SearchLabel><h2>Search for Coins</h2></SearchLabel>
          <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
        </SearchGrid>
      }
    </AppContext.Consumer>
    );
}
