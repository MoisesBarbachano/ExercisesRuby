import React from 'react';
import styled from 'styled-components';
import LineHour from './LineHour';

const ContainerDay = styled.div`
  top: 0px;
  z-index: 1;
  height: 81px;
  width: 100vw;
  position: fixed;
  text-align: left;
  background: white;
`;

const LabelDay = styled.p`
  color: gray;
  font-size: 12px;
  margin-bottom: 8px;
  padding-left: 100px;
`;

const NumberDay = styled.p`
  font-size: 24px;
  margin-top: 0px;
  padding-left: 100px;
  margin-bottom: 0px;
`;

const DateDay = () => {
  return (
    <ContainerDay>
      <LabelDay>MIÉ.</LabelDay>
      <NumberDay>8</NumberDay>
      <LineHour text="GMT-06" isTypeHour={true}></LineHour>
    </ContainerDay>
  )
}

export default DateDay;