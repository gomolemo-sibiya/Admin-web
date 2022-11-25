import React from 'react';
import { Gauge, ChartBar, Files } from "phosphor-react";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 2px;
  position: relative;
  color: #329D9C;
  width: 100%;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  font-size: 20px;

  .icon {
    margin-right: 5px;
  }

  :hover {
    background-color: #F1FAFA;
    color: #31456A;
  }
`;


const Navbar = () => {
  return (
    <Wrapper>
      <Items>
        <Item className='nav-item'>
          <Gauge className="icon" />
          Dashboard
        </Item>
        <Item className='nav-item'>
          <ChartBar className="icon" />
          Data
        </Item>
        <Item className='nav-item'>
          <Files className="icon" />
          Reports
        </Item>
      </Items>
    </Wrapper>
  )
}

export default Navbar