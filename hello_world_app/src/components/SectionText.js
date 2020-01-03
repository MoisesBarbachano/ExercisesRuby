import React from 'react';
import styled from 'styled-components';
import TextType from './TextType';

const ContainerText = styled.div`
  padding: 100px;
  padding-right: 40px;
  padding-top: 120px;
`;

const SectionText = () => {
  let stepDone = true;
  let stepToDo = false;
  
  return (
    <ContainerText>
      <TextType text="Identidad" passed={stepDone}/>
      <TextType text="Propietario" passed={stepDone}/>
      <TextType text="Características básicas" actived="true" passed={stepDone}/>
      <TextType text="Espacios" passed={stepToDo}/>
      <TextType text="Fotos y anuncio" passed={stepToDo}/>
      <TextType text="Precio" passed={stepToDo}/>
      <TextType text="Disponibilidad" passed={stepToDo}/>
    </ContainerText>
  )
}

export default SectionText;