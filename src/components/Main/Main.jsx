import React from 'react'
import styled from 'styled-components';
import BarChartComponent from '../Chart/BarChart.jsx';
import CheckList from '../Checklist/CheckList.jsx';
import Table from '../table/Table.jsx';
import Widget from '../Widget/Widget';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  .widgets {
    display: flex;
    padding: 10px;
    gap: 20px;
  }

  .data {
    float: left;
    padding: 10px;
    margin: 10px 10px;
    content: "";
    display: flex;
  }

  .data .chart {
      width: 60%;
      height: 112px;
  }

  .data .checklist {
    width: 40%;
    height: 112px;
  }

  .files {
    padding: 10px;
  }
`;

const Main = () => {
  return (
    <Container>
      <div className='widgets'>
        <Widget type='user'/>
        <Widget type='order'/>
        <Widget type='earning'/>
      </div>
      <div className='data'>
        <div className='chart'>
          <BarChartComponent />
        </div>
        <div className='checklist'>
          <CheckList />
        </div>
      </div>
      <div className='files'>
        <Table />
      </div>
    </Container>
  )
}

export default Main