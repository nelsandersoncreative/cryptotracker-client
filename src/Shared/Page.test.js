import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, AppContext } from '../App/AppProvider';
import Page from './Page';

describe('Page Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AppProvider>
        <AppContext.Consumer>
        {({page}) => {
          <Page />
        }}
        </AppContext.Consumer>
      </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
