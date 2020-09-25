import React from 'react';
import ReactDOM from 'react-dom';
import DashboardFill from './DashboardFill';

describe('DashboardFill Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DashboardFill />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
