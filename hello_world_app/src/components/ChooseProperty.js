import React from 'react';
import styled from 'styled-components';
import SectionText from './SectionText';
import SectionTypeProperty from './SectionTypeProperty';

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ChooseProperty = () => {
  return (
    <FlexContainer>
        <SectionText/>
        <SectionTypeProperty/>
    </FlexContainer>
  )
}

export default ChooseProperty;