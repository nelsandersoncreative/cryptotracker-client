import React from 'react';
import {AppContext} from '../App/AppProvider';
import './WelcomeMessage.css';

export default function({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit, hasAuth, currentUser, favorites, coins }) =>
        firstVisit && !hasAuth ? <div>
        <h1>Welcome to CryptoTracker</h1>
        <h3>This app allows you to track chronological price data for your favorite cryptocurrencies!</h3>
        <p>1. Register for an account or Login.</p>
        <p>2. Select coins below or search for them in the search bar.</p>
        <p>3. Click the coins to add them to your favorites.</p>
        <p>4. Press "Confirm Favorites" and click "Dashboard" to view coin price data.</p>
        <br/><br/>
        <div className="label-grid"><div></div><h2 className="favorite-coins-label">FAVORITE COINS</h2><div></div></div>
        {' '}
        {favorites.length === 0 ? <div className="placeholder-grid"><div></div><p className="favorites-placeholder">There are currently no selected coins.</p><div></div></div> : null}
        </div> : 
        <div className="welcome-greeting">
          Welcome {currentUser.user_name}!
          <br/><br/>
        <div className="label-grid">
        <div></div><h2 className="favorite-coins-label">FAVORITE COINS</h2><div></div>
        </div>
        <div>
        {favorites.length === 0 ? <div className="placeholder-grid"><div></div><p className="favorites-placeholder">There are currently no selected coins.</p><div></div></div> : null}
        </div>
        </div>
        }
    </AppContext.Consumer>
  );  
};
