import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import Welcome from './WelcomeMessage';
import Page from '../Shared/Page';

describe('Settings Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <AppProvider>
      <Page name="settings">
          <Welcome/>
      </Page>
    </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
