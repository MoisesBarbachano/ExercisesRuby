import React from 'react';
import styled from 'styled-components';

const ContainerSelected = styled.div`
  background: #24A0ED;
  height: 20px;
  width: 99%;
  margin-top: 18px;
  border-radius: 2px;
`;

const TextSelected = styled.span`
  font-size: 10px;
  color: #c8c8c8;
  color: white;
  padding-left: 5px;
`;

const DaySelected = () => {
  return (
    <ContainerSelected>
      <TextSelected>
        <strong>Meeting</strong>, 10:30 am
      </TextSelected>
    </ContainerSelected>
  )
}

export default DaySelected;