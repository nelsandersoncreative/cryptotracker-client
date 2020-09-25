import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import DashboardFill from './DashboardFill';
import Page from '../Shared/Page';

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <AppProvider>
      <Page name="dashboard">
      <DashboardFill />
      </Page>
    </AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
