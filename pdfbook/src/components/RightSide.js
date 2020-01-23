import React, { Fragment } from 'react';
import styled from 'styled-components';

const RightContainer = styled.div`
  background: green;
  height: 500px;
  width: 600px;
  clip-path: polygon(40px 342px, 439px 506px, 442px 0px, 37px 0px);
`;

const RightSide = () => {
  return (
    <Fragment>
      <RightContainer>

      </RightContainer>
    </Fragment>
  );
}

export default RightSide;