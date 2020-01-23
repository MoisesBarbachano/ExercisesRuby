import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  display: flex;
  color: black;
  width: 195px;
  padding-top: 16px;
  margin: 10px auto;
  margin-left: 50px;
  font-size: 16px;
  text-align: justify;
`;

const Text = (props) => {
  return (
    <StyledText>
      <span>{props.text}</span>
    </StyledText>
  );
}

export default Text;