import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.div`
  width: 200px;
  height: 35px;
  padding-top: 12px;
  margin: 10px auto;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const StyledParagraph = styled.p`
  margin-top: 2px;
  margin-bottom: 3px;
`;

const SubTitle = (props) => {
  let subtitles = [];
  let elementsShow = [];

  subtitles = props.text.split(",");
  subtitles.map((subtitle) => elementsShow.push(<StyledParagraph>{subtitle}</StyledParagraph>));

  return (
    <StyledSubTitle>
      {elementsShow}
    </StyledSubTitle>
  );
}

export default SubTitle;