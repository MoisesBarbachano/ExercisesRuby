import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  display: flex;
  color: black;
  width: 450px;
  padding-top: 135px;
  margin: 10px auto;
  font-size: 16px;
  text-align: justify;
`;

const BottomText = (props) => {
  return (
    <StyledText>
      <span>{props.text}</span>
    </StyledText>
  );
}

export default BottomText;