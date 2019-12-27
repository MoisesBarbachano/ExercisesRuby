import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from './arrow.png'

const DropdownButton = styled.button`
  background-color: #e8e8e8;
  color: black;
  margin-top: 7px;
  padding: 8px;
  padding-right: 2px;
  font-size: 14px;
  border: none;
  width: 90px;
  border-radius: 2px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 20px;
`;

const DropdownOption = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 4px;
  &:hover {
    background-color: #ddd;
  }
`;

const DropdownImage = styled.img`
  width: 10px;
  padding-left: 8px;
`;


const SelectTypeDate = () => {
  const [optionsShowed, setOptionsShowed] = useState(false);
  const [optionSelected, setOptionSelected] = useState("semana");

  const DropdownOptions = styled.div`
    display: ${optionsShowed ? 'inline-block' : 'none'};
    position: absolute;
    background-color: #f1f1f1;
    min-width: 90px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    top: -40px;
    left: 0px;
    padding-top: 15px;
    padding-bottom: 15px;
  `;

  const changeOption = (ev) => {
    optionsShowed ? setOptionsShowed(false) : setOptionsShowed(true);
    let valueSelected = ev.currentTarget.text;
    setOptionSelected(valueSelected);
  }
  
  return (
    <DropdownContainer>
      <DropdownButton onClick={changeOption}>{optionSelected}<DropdownImage src={arrow}/></DropdownButton>
      <DropdownOptions>
        <DropdownOption onClick={changeOption}>día</DropdownOption>
        <DropdownOption onClick={changeOption}>semana</DropdownOption>
        <DropdownOption onClick={changeOption}>mes</DropdownOption>
        <DropdownOption onClick={changeOption}>año</DropdownOption>
      </DropdownOptions>
    </DropdownContainer>
  );
}

export default SelectTypeDate;