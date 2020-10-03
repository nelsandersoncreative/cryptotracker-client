import React, { Component } from 'react';

import TokenService from '../services/TokenService';
import AuthApiService from '../services/auth-api-service';

import config from '../config';

import _ from 'lodash';
import moment from 'moment';

const cc = require('cryptocompare');


// initialized instance of context
export const AppContext = React.createContext();

// variables for maximum amount of favorites and time units in visualizations
const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

// component class Context provider
export class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //api-related state
      hasAuth: true,
      currentUserId: 1,
      currentUser: {user_name: 'a', user_email: 'a@a.com', user_id: 1},
      userCoinListStarted: null,
      coins: ["BTC"],
      coin: {},
      setLoading: this.setLoading,
      login: this.login,
      logout: this.logout,
      setCurrentUser: this.setCurrentUser,
      getCurrentUser: this.getCurrentUser,
      getUserCoins: this.getUserCoins,
      setUserCoins: this.setUserCoins,
      clearError: this.clearError,

      //app-related state
      error: null,
      isLoading: false,
      firstVisit: true,
      page: 'settings',
      favorites: [],
      timeInterval: 'months', 
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites,
      setCurrentFavorite: this.setCurrentFavorite,
      setFilteredCoins: this.setFilteredCoins,
      changeChartSelect: this.changeChartSelect
    }
  }

  // Client interaction with API
  async componentDidMount() {
    this.getCurrentUser()
  }
 
  async getCurrentUser() {
    if (TokenService.hasAuthToken()) {
      try {
        const user = await AuthApiService.getCurrentUser()
        this.setState({currentUser: user})
      } catch(err) {
        this.setState({error: err.message})
      }
    }
  }

  // set loading
  setLoading = bool => {
    this.setState({isLoading: bool})
  }

  // set current user in state
  setCurrentUser = userObject => {
    this.setState({ currentUser: userObject });
    this.setState({ currentUserId: userObject.id });
    this.setPage('settings');
  }

  // log in user
  login = (token) => {
    TokenService.saveAuthToken(token)
    this.setState({hasAuth: true})
  }

  // logout user
  logout = () => {
    TokenService.clearAuthToken()
    this.setState({hasAuth: false, firstVisit: true, coins: [], favorites: []})
  }

  // get user coin list
  getUserCoins = async id => {
    //GET request for user coins
    const res = await fetch(`${config.API_ENDPOINT}/user-coins/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })

    //throw an error if the response isn't ok
    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    let result = await res.json();
    this.setState({
      favorites: result[0].coins,
      coins: result[0].coins
    });
  }

  // set user coin list
  setUserCoins = async () => {
    try {
    const res = await fetch(`${config.API_ENDPOINT}/user-coins/add-coins/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      
      },
      body: JSON.stringify({
        id: this.state.currentUserId,
        coins: this.state.coins
      })
    })
    const result = await res.json();
    return result;
  } catch (err) {
    console.error({ msg: err });
  }
  }

  // Client-Side App related Functions

  // show register form
  showModalFunc = () => {
    this.setState({ showModal: true, showLogin: false });
  }

  // hide register form
  hideModalFunc = () => {
    this.setState({ showModal: false });
  }

  // show login form
  showLoginFunc = () => {
    this.setState({ showLogin: true, showModal: false });
  }

  // hide login form
  hideLoginFunc = () => {
    this.setState({ showLogin: false });
  }

  // when App loads ... get coins (fill up coinsList), prices and historical data
  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  }

  // propagate coins from CryptoCompare in the coin list
  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }

  // get coin prices
  fetchPrices = async () => {
    if(this.state.firstVisit) return;
    let prices = await this.prices();

    // Filter empty price objects
    prices = prices.filter(price => Object.keys(price).length);
    this.setState({prices});
  }

  // fetch historical price data dating back to 2010
  fetchHistorical = async () => {
    if(this.state.firstVisit) return;
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment().subtract({[this.state.timeInterval]: TIME_UNITS - index}).valueOf(),
          ticker.USD
        ])
      }
    ]
    this.setState({historical});
  }

  // get prices for coins in favorites
  prices = async () => {
    let returnData = [];
    for(let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
        returnData.push(priceData);
      } catch(e) {
        console.warn(`Fetch price error: `, e);
      }
    }
    return returnData;
  }

  //get historical data for a given coin
  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment()
          .subtract({[this.state.timeInterval]: units})
          .toDate()
        )
      )
    }
    return Promise.all(promises);
  }

  // add coin to a user's favorites as long as it's less than MAX-FAVORITES
  addCoin = key => {
    let favorites = [...this.state.favorites];
    if(favorites.length <= MAX_FAVORITES) {
      favorites.push(key);
      this.setState({favorites});
    }
  }

  // remove coin from a user's favorites
  removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({favorites: _.pull(favorites, key)})
  }

  // determine if a coin is in a user's favorites
  isInFavorites = key => _.includes(this.state.favorites, key);

  // confirm user favorites -- filling up user dashboard with data from each of
  // the coins in their favorites
  confirmFavorites = () => {
    if (!this.state.hasAuth) {
      this.setPage('register');
    } else if (this.state.hasAuth) {
      let currentFavorite = this.state.favorites[0];
      this.setState({
        firstVisit: false,
        coins: this.state.favorites,
        page: 'dashboard',
        currentFavorite,
        prices: null,
        historical: null
      }, () => {
        this.fetchPrices();
        this.fetchHistorical();
        this.setUserCoins();
      });
      localStorage.setItem('cryptoTracker', JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite
      }));  
    }
  }

  // Set the current favorite to display a historical data visualization
  setCurrentFavorite = (sym) => {
    this.setState({
      currentFavorite: sym,
      historical: null 
    }, this.fetchHistorical);
    localStorage.setItem('cryptoTracker', JSON.stringify({
      ...JSON.parse(localStorage.getItem('cryptoTracker')),
      currentFavorite: sym
    }))
  }

  // load users coin list and saved settings
  savedSettings() {
    let cryptoTrackerData = JSON.parse(localStorage.getItem('cryptoTracker'));
    if (!this.hasAuth) {
      return {page: 'settings', firstVisit: true};
    }
    let { favorites, currentFavorite } = cryptoTrackerData;
    return { favorites, currentFavorite };
  }  

  // set the page to be displayed
  setPage = page => {page !== 'dashboard' ? this.setState({page}) : this.confirmFavorites()}

  // set filtered coins to state
  setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

  // handles changing the time measurement (days, weeks or months)
  // for visualizations in the user dashboard
  changeChartSelect = (value) => {
    this.setState({timeInterval: value, historical: null}, this.fetchHistorical);
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
