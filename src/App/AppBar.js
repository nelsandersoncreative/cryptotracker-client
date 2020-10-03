import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components'
import { AppContext } from './AppProvider';
import LogoImage from './logo.png';
import './AppBar.css';


//styles using 'styled-components'
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  border: 1px solid var(--success-color);
  padding: 20px
  margin-bottom: 40px;
  @media(max-width: 730px) {
    justify-content: center;
  }
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  box-shadow: 0px 0px 4px 2px black;
    margin: 5px;
    padding: 5px;
    @media(max-width: 730px) {
    margin-top: 20px;
    }
    &:hover {
      box-shadow: 0px 0px 4px 2px #5fff17;
    }
  ${props => props.active && css`
  cursor: pointer;
  box-shadow: 0px 0px 4px 2px #5fff17;
  margin: 5px;
  padding: 5px;
    &:hover {
      box-shadow: 0px 0px 4px 2px #5fff17;
    }
  `}

`

function ControlButton({name, active}) {
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElem 
          active={page === name}
          onClick={ () => setPage(name) }
          >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

export default function() {
  const { hasAuth, setPage, logout } = useContext(AppContext);
  return (
    <Bar>
      <Logo><img id="logo-img" src={LogoImage} alt="crypto-tracker-logo" /> CryptoTracker </Logo>
      <div className="nav-controls">
      <ControlButton name="settings" />
      {hasAuth ? <ControlButton name="dashboard" /> : <ControlButton name="register" />}
      {hasAuth ? <Link to='/' className="nav-link" onClick={() => {logout(); setPage('settings');}}>Logout</Link> : <ControlButton name="login" />}
      </div>
    </Bar>
  )}
  