import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from './Styles';

// css styling for Tile component
export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

// CSS Styling for a tile if it is selectable
export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`
// CSS Styling for a tile if it is deletable
export const DeletableTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`
// CSS Styling for a tile if it is disabled (added to user favorites)
export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`
