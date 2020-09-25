import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../App/AppProvider';
import WelcomeMessage from './WelcomeMessage';

describe('WelcomeMessage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const hasAuth = {hasAuth: true};
    ReactDOM.render(<AppProvider><WelcomeMessage hasAuth={hasAuth} /></AppProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
