import React from 'react';
import styled from 'styled-components';
import CircleDay from './CircleDay';

const ContainerDays = styled.div`
  display: flex;
  flex-direction: row;
`;

const GroupCircleDays = () => {
  return (
    <ContainerDays>
      <CircleDay value="D"/>
      <CircleDay value="L"/>
      <CircleDay value="M"/>
      <CircleDay value="X"/>
      <CircleDay value="J"/>
      <CircleDay value="V"/>
      <CircleDay value="S"/>
    </ContainerDays>
  );
}

export default GroupCircleDays;