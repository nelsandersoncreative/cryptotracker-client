import React, { Fragment, useContext } from 'react';
import { AppContext } from '../App/AppProvider';
import Welcome from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

// Settings Component
export default function() {
  const hasAuth = useContext(AppContext);
  
  return (
    <Page name="settings">
    {hasAuth ?
      <Fragment>
        <Welcome />
        <CoinGrid topSection />
        <ConfirmButton />
        <Search />
        <CoinGrid />
      </Fragment>
      :
      <Welcome />
    }
    </Page>
)};
