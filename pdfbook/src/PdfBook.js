import React, { Fragment } from 'react';
import CenterBook from './components/CenterBook';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import BottomSide from './components/BottomSide';
import styled from 'styled-components';

const CoverUpPage = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PdfBook = () => {
  return (
    <div>
      <CenterBook/>
      <CoverUpPage>
        <LeftSide/>
        <RightSide/>
      </CoverUpPage>
      <BottomSide/>
    </div>
  );
}

export default PdfBook;