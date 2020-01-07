import React from 'react';
import styled from 'styled-components';
import LineHour from './LineHour';

const ContainerHours = styled.div`
  margin-top: 80px;
  margin-left: 30px;
  height: 950px;
  width: 400px;
`;

const setHour = (hour) => {
  if(hour < 12) return `${hour} AM`; 
  if(hour == 12) return `${hour} PM`;

  return `${hour - 12} PM`;
}

const DateMonth = () => {
  const totalHours = 24;
  const firstHour = 1;
  const selectedHour = 11;

  let hours = [];
  let actualHour;
  let isTimeSelected = false;

  for (let hour = firstHour; hour < totalHours; hour++) {
    actualHour = setHour(hour);
    isTimeSelected = (hour == selectedHour);
    hours.push(<LineHour text={actualHour} isSelected={isTimeSelected}/>);
  }

  return (
    <ContainerHours>
      {hours}
    </ContainerHours>
  )
}

export default DateMonth;