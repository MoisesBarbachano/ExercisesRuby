import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Text from './Text';
import SubTitle from './SubTitle';

const LeftContainer = styled.div`
  background: #c64a3e;
  height: 550px;
  width: 300px;
  clip-path: polygon(0px 550px, 276px 438px, 278px 3px, 0px 0px);
`;

const LeftSide = () => {
  let textInfo = 'Restringen o controlan la forma en que creamos los objetos, evitando que el usuario utilice la instrucción new para crear nuevas instancias.';
  let subtitles = 'Abstract Factory,Factory Method,Object Pool,Prototype,Singleton,Builder'

  return (
    <Fragment>
      <LeftContainer>
        <Title text="Creacionales" />
        <Text text={textInfo}/>
        <SubTitle text={subtitles}/>
      </LeftContainer>
    </Fragment>
  );
}

export default LeftSide;