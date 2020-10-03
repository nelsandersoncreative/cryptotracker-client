import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

// Confirm Favorites Button component found in settings component

// CSS Styling for confirm button
const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3}
  ${fontSize1}
  padding: 5px;
  cursor: pointer;
    &:hover {
      ${greenBoxShadow}
    }
  @media(max-width: 780px) {
    font-size: 20px;
    ${greenBoxShadow}
      &:active {
        color: black;
        background-color: var(--success-color)
      }

  }
`

// CSS Styling for confirm button div container
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
`

// Confirm Favorites Button component found in settings component
export default function() {
  return (
    <AppContext.Consumer>
      {({confirmFavorites, favorites, setPage}) => 
        <CenterDiv>
          <ConfirmButtonStyled onClick={favorites.length >= 1 ? confirmFavorites : () => setPage('dashboard')}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      }
    </AppContext.Consumer>
  )
}
