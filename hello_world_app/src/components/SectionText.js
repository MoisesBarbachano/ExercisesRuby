import React from 'react';
import styled from 'styled-components';
import TextType from './TextType';

const ContainerText = styled.div`
  padding: 100px;
  padding-right: 40px;
  padding-top: 120px;
`;

const SectionText = () => {
  return (
    <ContainerText>
      <TextType text="Identidad" passed={true}/>
      <TextType text="Propietario" passed={true}/>
      <TextType text="Características básicas" actived="true" passed={true}/>
      <TextType text="Espacios" passed={false}/>
      <TextType text="Fotos y anuncio" passed={false}/>
      <TextType text="Precio" passed={false}/>
      <TextType text="Disponibilidad" passed={false}/>
    </ContainerText>
  )
}

export default SectionText;