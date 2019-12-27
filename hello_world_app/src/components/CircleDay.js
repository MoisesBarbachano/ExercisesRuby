import React, { useState } from 'react';
import styled from 'styled-components';

const CircleDay = (props) => {
  const [clicked, setClicked] = useState(false);

  const CircleContainer = styled.div`
    background: ${clicked ? '#1a73e8' : '#9aa0a6'};
    cursor: pointer;
    border-radius: 90px;
    height: 21px;
    width: 21px;
    margin-left: 5px;
    margin-right: 5px;
  `;

  const TextCircle = styled.p`
    color: ${clicked ? 'white' : 'black'};
    font-size: 10px;
    margin-left: 8px;
    margin-top: 4px;
  `;

  const changeColor = () => {
    clicked ? setClicked(false) : setClicked(true);
  }

  return (
    <CircleContainer onClick={changeColor}>
      <TextCircle>{props.value}</TextCircle>
    </CircleContainer>
  );
}

export default CircleDay;