import React from 'react';
import { AppContext } from '../App/AppProvider';
import './Content.css';

var Spinner = require('react-spinkit');

// Return the content for a given page
// if data is loading, show spinner
export default function(props) {
  return <AppContext.Consumer>
    {({coinList, prices, firstVisit}) => {
      if(!coinList) {
        return <div className="spinner">  <Spinner name="pacman" color="var(--success-color)"/><div className="middle-spinner"></div>     Loading Coins</div>
      }
      if(!firstVisit && !prices) {
        return <div className="spinner"> <Spinner name="pacman" color="var(--success-color)"/><div className="middle-spinner"></div>     Loading Prices</div>
      }
      return <div> {props.children} </div>
    }}
  </AppContext.Consumer>
}
