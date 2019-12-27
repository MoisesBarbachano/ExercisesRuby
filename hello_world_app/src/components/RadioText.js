import React from 'react';
import styled from 'styled-components';

const ContainerRadio = styled.div`
  margin-bottom: 15px;
`;

const InputRadioText = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;
  background-color: white;
  color: #666;
  top: 10px;
  height: 22px;
  width: 22px;
  border: solid 2px #1a73e8;
  border-radius: 50px;
  cursor: pointer;     
  margin-right: 7px;
  margin-bottom: 5px;
  outline: none;
  &:checked::before {
    position: absolute;
    font: 40px/1 'Open Sans', sans-serif;
    left: -3px;
    top: -11px;
    color: #1a73e8;
    border-radius: 40px;
    content: '\\2022';
    transform: rotate(40deg);
  }
  &:checked {
    background-color: #f1f1f1;
  }
`;

const RadioText = (props) => {
  return (
    <ContainerRadio>
      <InputRadioText name={props.group} type="radio"/>{props.text}<br/>
    </ContainerRadio>
  );
}

export default RadioText;