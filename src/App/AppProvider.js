import React, { Component } from 'react';

import TokenService from '../services/TokenService';
import AuthApiService from '../services/auth-api-service';

import config from '../config';

import _ from 'lodash';
import moment from 'moment';

const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

export class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //api-related state
      hasAuth: false,
      currentUserId: null,
      currentUser: null,
      userCoinListStarted: null,
      coins: [],
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

  setLoading = bool => {
    this.setState({isLoading: bool})
  }

  setCurrentUser = userObject => {
    this.setState({ currentUser: userObject });
    this.setState({ currentUserId: userObject.id });
    this.setPage('settings');
  }

  login = (token) => {
    TokenService.saveAuthToken(token)
    this.setState({hasAuth: true})
  }

  logout = () => {
    TokenService.clearAuthToken()
    this.setState({hasAuth: false, firstVisit: true, coins: [], favorites: []})
  }

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
  } catch (err) {
    console.error({ msg: err });
  }
  }

  // Client-Side App related Functions

  showModalFunc = () => {
    this.setState({ showModal: true, showLogin: false });
  }

  hideModalFunc = () => {
    this.setState({ showModal: false });
  }

  showLoginFunc = () => {
    this.setState({ showLogin: true, showModal: false });
  }

  hideLoginFunc = () => {
    this.setState({ showLogin: false });
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }

  fetchPrices = async () => {
    if(this.state.firstVisit) return;
    let prices = await this.prices();

    // We must filter the empty price objects (not in the lecture)
    prices = prices.filter(price => Object.keys(price).length);
    this.setState({prices});
  }

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

  // fetchPrices = async () => {
  //   let prices = await this.prices();
  //   console.log(prices);
  //   this.setState({prices});
  // }

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

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if(favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({favorites});
    }
  }

  removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({favorites: _.pull(favorites, key)})
  }

  isInFavorites = key => _.includes(this.state.favorites, key);

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

  savedSettings() {
    let cryptoTrackerData = JSON.parse(localStorage.getItem('cryptoTracker'));
    if (!this.hasAuth) {
      return {page: 'settings', firstVisit: true};
    }
    let { favorites, currentFavorite } = cryptoTrackerData;
    return { favorites, currentFavorite };
  }  

  setPage = page => {page !== 'dashboard' ? this.setState({page}) : this.confirmFavorites()}


  setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

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
