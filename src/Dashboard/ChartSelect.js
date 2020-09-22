import styled from 'styled-components';

// styles for days/weeks/months pulldown 

export default styled.select`
  background-color: #061a44;
  outline: 0;
  font-size: 30px;
  padding: 10px 20px;
  font-family: var(--font-family);
  color: var(--success-color);
  border: none;
  margin: 0;
  width: 100%
  height: 60px;
`;


// .custom-select {
//   position: relative;
//   font-family: Arial;
// }

// .custom-select select {
//   display: none; /*hide original SELECT element: */
// }

// .select-selected {
//   background-color: DodgerBlue;
// }

// /* Style the arrow inside the select element: */
// .select-selected:after {
//   position: absolute;
//   content: "";
//   top: 14px;
//   right: 10px;
//   width: 0;
//   height: 0;
//   border: 6px solid transparent;
//   border-color: #fff transparent transparent transparent;
// }

// /* Point the arrow upwards when the select box is open (active): */
// .select-selected.select-arrow-active:after {
//   border-color: transparent transparent #fff transparent;
//   top: 7px;
// }

// /* style the items (options), including the selected item: */
// .select-items div,.select-selected {
//   color: #ffffff;
//   padding: 8px 16px;
//   border: 1px solid transparent;
//   border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
//   cursor: pointer;
// }

// /* Style items (options): */
// .select-items {
//   position: absolute;
//   background-color: DodgerBlue;
//   top: 100%;
//   left: 0;
//   right: 0;
//   z-index: 99;
// }

// /* Hide the items when the select box is closed: */
// .select-hide {
//   display: none;
// }

// .select-items div:hover, .same-as-selected {
//   background-color: rgba(0, 0, 0, 0.1);
// }