import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import Content from '../Shared/Content';

require('dotenv').config();

const cc = require('cryptocompare');
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE_API_KEY);

// main app component

function App(props) {

  return (
    <BrowserRouter>
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
          <Settings />
          <Dashboard />
          <Login />
          <Register />
          </Content>
        </AppProvider>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
