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
    background: #e8e8e8;
    border: solid white 0px;
    border-radius: 2px;
    border-bottom: solid ${focused ? '#1a73e8' : '#e8e8e8'} 2px;
    color: black;
    padding-left: 15px;
  `;

  const setLine = () => {
    focused ? setFocused(false) : setFocused(true);
  }

  return (
    <div>
      <NumberStyled onFocus={setLine} type="number" value="1"/>
    </div>
  );
}

export default InputNumber;