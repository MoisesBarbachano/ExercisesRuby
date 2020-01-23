import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  width: 200px;
  height: 35px;
  padding-top: 12px;
  margin: 10px auto;
  background: rgb(0,0,0,.5);
  border-radius: 5px;
`;

const Title = (props) => {
  return (
    <StyledTitle>
      <span>{props.text}</span>
    </StyledTitle>
  );
}

export default Title;