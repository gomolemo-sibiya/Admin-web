import React from 'react';
import Navbar from '../navbar/Navbar';

import './sidebar.css';

const Profile = () => {
    return (
        <div className='inline'>
            <div className="profile-img" />
            <p className='client-name'>Mary Poppins</p>
            <p className='client-role'>Administrator</p>
        </div>
    );
}

const UpgradeBlock = () => {
    return (
        <div className='inline'>
            <p className='client-role'>Administrator</p>
            <div class="profile-img edge" />
            <p className='client-role'>Administrator</p>
            <button className='upgrade-button'>upgrade</button>
        </div>
    );
}

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
        <div className='top'>
            <div className='profile'>
                <Profile />
            </div>
            <div className='navbar'>
                <Navbar />
            </div>
        </div>
        <div className='bottom upgrade'>
            <UpgradeBlock />
        </div>
    </div>
  )
}

export default Sidebar