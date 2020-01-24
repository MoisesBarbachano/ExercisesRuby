import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  display: flex;
  color: black;
  width: 205px;
  padding-top: 16px;
  margin: 10px auto;
  margin-left: 45px;
  font-size: 15px;
  text-align: justify;
  font-family: 'Permanent Marker', cursive;
`;

const Text = (props) => {
  return (
    <StyledText>
      <span>{props.text}</span>
    </StyledText>
  );
}

export default Text;