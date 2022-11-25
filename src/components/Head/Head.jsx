import React from 'react';
import styled from 'styled-components';
import { SignOut } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #329D9C;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  .logoImage {
    margin: 0 20px;
    width: 45px;
    height: 45px;
    background: url('https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&q=80'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
  }
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 5px 8px;
  border: none;

  p {
    margin: 0 5px;
  }
`;

const Head = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <Container>
      <Logo>
        <div className='logoImage'/>
        <p>Client Portal</p>
      </Logo>
      <Logout onClick={handleClick}>
        <SignOut className="icon" />
        <p>Logout</p>
      </Logout>
    </Container>
  )
}

export default Head