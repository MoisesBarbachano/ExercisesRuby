import React from 'react';
import styled from 'styled-components';
import TypeProperty from './TypeProperty';

const ContainerType = styled.div`
  padding: 50px;
  padding-top: 82px;
  margin-top: 40px;
  height: 370px;
  border: solid 2px #8d7aff;
`;

const ParagraphStyle = styled.p`
  color: gray;
  font-size: 20px;
  padding-bottom: 15px;
`;

const SectionTypeProperty = () => {
  return (
    <ContainerType>
        <ParagraphStyle>Tipo de propiedad</ParagraphStyle>
        <TypeProperty text="Departamento"/>
        <TypeProperty text="Estudio"/>
        <TypeProperty text="Loft"/>
        <TypeProperty text="Casa"/>
        <TypeProperty text="Duplex"/>
    </ContainerType>
  )
}

export default SectionTypeProperty;