import React from 'react';
import styled from 'styled-components';
import DaySelected from './DaySelected';

const LeftContainer = styled.div`
  border: 1px solid #c8c8c8;
  width: 10px;
  border-top: 0px;
  border-left: 0px;
`;
const RightContainer = styled.div`
  border: 1px solid #c8c8c8;
  width: 1200px;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
`;

const LineHour = (props) => {
  let containerDay;
  const RowHour = styled.div`
    height: ${props.isTypeHour ? '20px' : '40px'};
    width: 1200px;
    display: flex;
    flex-direction: row;
    margin-left: 40px;
    padding-left: ${props.isTypeHour ? '30px' : '0px'};
  `;

  const ContainerText = styled.div`
    position: absolute;
    left: 20px;
    width: 40px;
    padding-top: ${props.isTypeHour ? '0px' : '30px'};
    text-align: right;
    font-size: 11px;
  `;

  if (props.isSelected) containerDay = <DaySelected />;

  return (
    <div>
      <RowHour>
        <LeftContainer>
          <ContainerText>
            <span>
              {props.text}
            </span>
          </ContainerText>
        </LeftContainer>
        <RightContainer>
          {containerDay}
        </RightContainer>
      </RowHour>
    </div>
  )
}

export default LineHour;