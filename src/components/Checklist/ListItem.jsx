import React from "react"
import styled from "styled-components"

const CheckBox = styled.input`
  margin: 6px 10px 5.8px 3px;
  border-radius: 2px;
  border: solid 1px #31456A;
  background: ${(porps) => (porps.checked ? '#329D9C' : '#fbfcff')};
`
const Container = styled.div`
  flex-basis: 150px;
  flex-grow: 1;
  display: flex;
`
const Description = styled.p`
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  width: auto;
`

const ListItem = ({ text, handleOnChange, selected }) => {
  return (
    <Container>
        <CheckBox
            type="checkbox"
            checked={selected}
            onChange={handleOnChange}
        ></CheckBox>
        <Description className="column" style={{ width: "auto", float: "left" }}>
            {text}
        </Description>
    </Container>
  )
}

export default ListItem