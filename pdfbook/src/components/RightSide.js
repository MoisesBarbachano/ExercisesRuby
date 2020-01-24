import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Text from './Text';
import SubTitle from './SubTitle';

const RightContainer = styled.div`
  background: #81be57;
  height: 550px;
  width: 400px;
  clip-path: polygon(20px 421px, 294px 543px, 297px 2px, 23px 1px);
`;

const TitleContainer = styled.div`
  margin-left: 45px;
`;

const RightSide = () => {
  let textInfo = 'Describen cómo los objetos y clases se pueden combinar para formar estructuras más grandes y complejas.';
  let subtitles = 'Composite,Decorator,Flyweight,Adaptar,Facade,Bridge,Proxy';

  return (
    <Fragment>
      <RightContainer>
        <TitleContainer>
          <Title text="Estructurales"/>
        </TitleContainer>
        <Text text={textInfo}/>
        <SubTitle align='right' text={subtitles}/>
      </RightContainer>
    </Fragment>
  );
}

export default RightSide;