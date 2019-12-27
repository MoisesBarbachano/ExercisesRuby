import React from 'react';
import styled from 'styled-components';
import RepeatEvery from './components/RepeatEvery';
import './App.css';

const App = () => {
  const PeriocityContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 20px;
    width: 420px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <PeriocityContainer>
        <RepeatEvery/>
    </PeriocityContainer>
  );
}

export default App;