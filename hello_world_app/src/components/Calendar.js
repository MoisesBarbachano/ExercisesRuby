import React from 'react';
import styled from 'styled-components';
import DateDay from './DateDay';
import DateHours from './DateHours';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Calendar = () => {
  return (
    <FlexContainer>
      <DateDay></DateDay>
      <DateHours></DateHours>
    </FlexContainer>
  )
}

export default Calendar;