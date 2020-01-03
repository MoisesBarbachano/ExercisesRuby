import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  border: solid 1px #c8c8c8;
  cursor: pointer;
  width: 350px;
  height: 30px;
  margin: 8px 0px;
  padding: 12px 0px 0px 12px;
  font-size: 15px;
`;

const RadioButton = styled.input`
  visibility:hidden;
  position: absolute;
  &:checked + ${ StyledText } {
    color: white;
    font-weight:bold;
    background-color: #8D7AFF;
  }
`;

const TypeProperty = (props) => {
  return (
    <label>
        <RadioButton type='radio' name='group-element' />
        <StyledText>{props.text}</StyledText>
    </label>
  )
}

export default TypeProperty;