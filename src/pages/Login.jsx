import React from 'react'
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate("/dashboard");
    }

    return (
        <div className='login-container'>
            <div className='top-bar'>
                <div className='logo'>
                    <div className='icon'>
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="logo"/>
                    </div>
                    <div style={{margin: '0 10px'}}></div>
                    <div className='portal-name'>Client Portal</div>
                </div>
            </div>
            <div className='form-wrapper'>
                <div className="login-box">
                    <div className="login-top">
                        <div className="welcome">
                            <h2 className='login-title'>Welcome back</h2>
                            <h2 className='name'>Kevin</h2>
                        </div>
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="logo"/>
                        </div>
                    </div>
                    <form>
                        <div className="user-box">
                            <input type="text" name="" required="" />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" required="" />
                            <label>Password</label>
                        </div>
                    </form>
                    <div className="submit-button">
                        <button onClick={navigateToDashboard}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;