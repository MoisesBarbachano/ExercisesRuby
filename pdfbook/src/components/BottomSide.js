import React, { Fragment } from 'react';
import styled from 'styled-components';

const BottomContainer = styled.div`
  background: orange;
  margin-top: -120px;
  height: 500px;
  width: 1200px;
  clip-path: polygon(834px 180px, 837px 497px, 3px 498px, 3px 180px, 439px 4px);
`;

const BottomSide = () => {
  return (
    <Fragment>
      <BottomContainer>

      </BottomContainer>
    </Fragment>
  );
}

export default BottomSide;