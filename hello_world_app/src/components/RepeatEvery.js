import React from 'react';
import styled from 'styled-components';
import InputNumber from './InputNumber';
import SelectTypeDate from './SelectTypeDate';
import GroupCircleDays from './GroupCircleDays';
import GroupRadios from './GroupRadios';
import TextContainer from './TextContainer';
import ButtonForm from './ButtonForm';

const TitlePeriodicity = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;

const RepeatContainer = styled.div`
  font-family: Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  background: white;
  padding: 5px;
  height: 390px;
  width: 360px;
`;

const RepeatEveryTime = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContainerDates = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContainerTexts = styled.div`
  padding-top: 79px;
  margin-left: 20px;
  margin-top: 26px;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const RepeatEvery = () => {
  return (
    <RepeatContainer>
      <TitlePeriodicity>Periodicidad personalizada</TitlePeriodicity>
      <RepeatEveryTime>
        <p>Repetir cada</p>
        <InputNumber/>
        <SelectTypeDate/>
      </RepeatEveryTime>
      <div>
        <p>Se repite el</p>
        <GroupCircleDays/> 
      </div>
      <ContainerDates>
        <div>
          <p>Termina</p>
          <GroupRadios/>
        </div>
        <ContainerTexts>
          <TextContainer text="27 de mar de 2020" size="130"/>
          <TextContainer text="13   repeticiones" size="170"/>
        </ContainerTexts>
      </ContainerDates>
      <ContainerButtons>
        <ButtonForm text="Cancelar" color="gray"/>
        <ButtonForm text="Listo" color="#1a73e8"/>
      </ContainerButtons>
    </RepeatContainer>
  )
}

export default RepeatEvery;