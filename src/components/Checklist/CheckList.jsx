import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  color: #31456A;
`;

function CheckList() {
  const [state, setState] = React.useState({ selections: [] })
  const options = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
  ]

  function handleCheckboxChange(key) {
    let sel = state.selections
    let find = sel.indexOf(key)
    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(key)
    }

    setState({
      selections: sel
    })
  }

  function checkboxItems() {
    return (
      <React.Fragment>
        {options.map(option => (
          <ListItem
            key={option}
            text={option}
            handleOnChange={() => handleCheckboxChange(option)}
            selected={state.selections.includes(option)}
          ></ListItem>
        ))}
      </React.Fragment>
    )
  }

  return (
    <div className="App">
      <Container>
        {checkboxItems()}
      </Container>
    </div>
  )
}
export default CheckList