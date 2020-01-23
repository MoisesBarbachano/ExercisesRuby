import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Text from './Text';

const RightContainer = styled.div`
  background: #81be57;
  height: 550px;
  width: 300px;
  clip-path: polygon(20px 421px, 294px 543px, 297px 2px, 23px 1px);
`;

const RightSide = () => {
  let textInfo = 'Describen cómo los objetos y clases se pueden combinar para formar estructuras más grandes y complejas.';
  return (
    <Fragment>
      <RightContainer>
        <Title text="Estructurales"/>
        <Text text={textInfo}/>
      </RightContainer>
    </Fragment>
  );
}

export default RightSide;