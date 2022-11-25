import React from 'react'
import Head from '../components/Head/Head'
import Main from '../components/Main/Main'
import Sidebar from '../components/sidebar/Sidebar'
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dash-container'>
      <div className='child header'>
        <Head />
      </div>
      <div className='main'>
        <div className='child sidebar'>
          <Sidebar />
        </div>
        <div className='child center'>
          <Main/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard