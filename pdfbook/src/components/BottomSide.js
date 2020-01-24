import React, { Fragment } from 'react';
import styled from 'styled-components';
import BottomText from './BottomText';
import SubTitle from './SubTitle';
import Title from './Title';

const BottomContainer = styled.div`
  height: 400px;
  width: 600px;
  margin-top: -120px;
  background: #e3a252;
  clip-path: polygon(593px 144px, 593px 495px, 3px 498px, 4px 154px, 332px 23px);
`;

const SubtitlesContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledImage = styled.img`
  width: 180px;
  padding-right: 20px;
  margin-top: -5px;
`;

const BottomSide = () => {
  let textInfo = 'colaboración, relaciones y delegación de responsabilidades entre otras clases logrando con esto simplificar la forma en que los objetos se comunican e interactúan entre sí.';
  let firstSubtitles = 'Iterator,Mediator,Memento';
  let secondSubtitles = 'Templete Method,Strategy,Chain of Resp';
  let thirdSubtitles = 'Iterator,Command,Observer';

  return (
    <Fragment>
      <BottomContainer>
        <BottomText text={textInfo}/>
        <SubtitlesContainer>
          <SubTitle text={firstSubtitles}/>
          <SubTitle text={secondSubtitles}/>
          <SubTitle text={thirdSubtitles}/>
        </SubtitlesContainer>
        <FooterContainer>
          <Title text="Comportamiento" />
          <StyledImage src="./logo.png" />
        </FooterContainer>
      </BottomContainer>
    </Fragment>
  );
}

export default BottomSide;