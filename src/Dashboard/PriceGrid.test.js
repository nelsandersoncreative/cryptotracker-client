import React from 'react';
import ReactDOM from 'react-dom';
import { AppContext, AppProvider } from '../App/AppProvider';
import PriceGrid from './PriceGrid';

describe('PriceGrid Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AppProvider>
      <AppContext.Consumer>
          {({ prices }) => {
            <PriceGrid />
          }}
      </AppContext.Consumer>
      </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
