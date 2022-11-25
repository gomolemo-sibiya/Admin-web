import styled from 'styled-components';

export const Container = styled.div`
  margin:0;
  padding:0;
  font-family: sans-serif;
  background:url(https://images.unsplash.com/photo-1498335746477-0c73d7353a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-position: -40px 0;
`;

export const TopBar = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding-top: 25px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: auto;
  

  .icon img {
    width: 40px;
    height: 40px;
    border-radius: 20%;
    box-shadow: 0 15px 25px rgba(180, 180, 180, 0.6);
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: auto;
  }

  .portal-name {
    font-size: xx-large;
    font-weight: 600;
    color: #56C596;
  }
`;

export const LoginBox = styled.div`
  width: 400px;
  padding: 40px;
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(180, 180, 180, 0.6);
  border-radius: 10px;
  height: auto;
  
  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  h2 {
    padding: 0;
    margin: 10px 0;
  }
  
  .login-title {
    color: #1A1A1A;
  }
  .name {
    color: #56C596;
  }

  .login-top {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 30px 0;
  }

  .top-text{
    margin: 0;
    padding: 0;
  }

  .user-box {
    position: relative;
  }

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  
  .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #56C596;
    outline: none;
    background: transparent;
  }

  .user-box label {
    position: absolute;
    top:0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }
  
  .user-box input:focus ~ label,
  .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #7A7A7A;
    font-size: 12px;
  }

  form {

    padding: 10px 0;
  }

  form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
  }
  
  a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
  }
  
  .a span {
    position: absolute;
    display: block;
  }
  
  a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }
  
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,100% {
      left: 100%;
    }
  }
  
  a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s
  }
  
  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,100% {
      top: 100%;
    }
  }
  
  a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s
  }
  
  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,100% {
      right: 100%;
    }
  }
  
  a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s
  }
  
  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,100% {
      bottom: 100%;
    }
  }


  .submit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }

  .submit-button button {
    background-color: #56C596;
    border: 0;
    padding: 10px 0;
    width: 80%;
    border-radius: 50px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 100;
  }
`;