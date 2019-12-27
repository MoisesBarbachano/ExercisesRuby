import React, { useState } from 'react';
import styled from 'styled-components';

const InputNumber = () => {
  const [focused, setFocused] = useState(false);

  const NumberStyled = styled.input`
    -moz-appearance: ${focused ? 'button' : 'textfield'};
    width: 40px;
    height: 28px;
    margin-top: 8px;
    margin-left: 8px;
    background: #9aa0a6;
    border: solid white 0px;
    border-bottom: solid ${focused ? '#1a73e8' : '#9aa0a6'} 2px;
    color: black;
    padding-left: 15px;
  `;
  const setLine = () => {
    focused ? setFocused(false) : setFocused(true);
  }
  return (
    <div>
      <NumberStyled onFocus={setLine} type="number"/>
    </div>
  );
}

export default InputNumber;