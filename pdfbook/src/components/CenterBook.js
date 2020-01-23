import React, { Fragment } from 'react';
import styled from 'styled-components';

const CenterContainer = styled.div`
  background: rgb(0,0,0,.5);
  clip-path: circle(50% at 50% 50%);
  height: 300px;
  width: 300px;
  position: absolute;
  z-index: 2;
  left: 160px;
  top: 260px;
  opacity: .8;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 50px;
  z-index: 2;
  width: 220px;
  left: 210px;
  top: 240px;
`;

const CenterBook = () => {
  return (
    <Fragment>
      <CenterContainer>
      </CenterContainer>
      <StyledImage src="/book.png"/>
    </Fragment>
  );
}

export default CenterBook;