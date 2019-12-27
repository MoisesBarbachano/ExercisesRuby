import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.png'

const SelectTypeStyled = styled.select`
  margin-left: 20px;
  margin-top: 7px;
  padding: .5em 1.4em .5em .8em;
  box-sizing: border-box;
  border: 0px solid white;
  border-radius: 2px;
  appearance: none;
  background-image: url(${arrow}),
    linear-gradient(to bottom, #9aa0a6 0%,#9aa0a6 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
`;

const SelectTypeDate = () => {
  return (
    <div>
      <SelectTypeStyled>
        <option>día</option>
        <option selected>semana</option>
        <option>mes</option>
        <option>año</option>
      </SelectTypeStyled>
    </div>
  );
}

export default SelectTypeDate;