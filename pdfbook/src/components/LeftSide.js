import React, { Fragment } from 'react';
import styled from 'styled-components';

const LeftContainer = styled.div`
  background: red;
  height: 500px;
  width: 600px;
  clip-path: polygon(0px 500px, 415px 343px, 414px 0px, 0px 0px);
`;

const LeftSide = () => {
  return (
    <Fragment>
      <LeftContainer>

      </LeftContainer>
    </Fragment>
  );
}

export default LeftSide;