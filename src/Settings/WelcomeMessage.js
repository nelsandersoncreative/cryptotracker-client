import React from 'react';
import {AppContext} from '../App/AppProvider';
import './WelcomeMessage.css';

// Welcome Message and Empty User Coin Wallet for new user found in Settings Component
export default function({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit, hasAuth, currentUser, favorites, coins }) =>
        firstVisit && !hasAuth ? <div className="welcome-container">
        <h1 className="welcome-head">Welcome to CryptoTracker</h1>
        <h3 className="welcome-desc">This app allows you to track chronological price data for your favorite cryptocurrencies!</h3>
        <p className="welcome-steps">
        <ul className="welcome-list">
          <li>Sample Login Credentials to view the onboarding experience:</li>
          <li>USERNAME: sampleuser@sampleuser.com</li>
          <li>PASSWORD: foobar</li>
        </ul>
        </p>
        <p className="welcome-steps">1. Register for an account or Login.</p>
        <p className="welcome-steps">2. Select coins below or search for them in the search bar.</p>
        <p className="welcome-steps">3. Click the coins to add them to your favorites.</p>
        <p className="welcome-steps">4. Press "Confirm Favorites" and click "Dashboard" to view coin price data.</p>
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
