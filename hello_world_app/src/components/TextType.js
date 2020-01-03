import React from 'react';
import styled from 'styled-components';

const TextType = (props) => {
  const TextStyle = styled.p`
    color: ${props.passed ? '#8d7aff' : 'gray'};
    font-weight: ${props.actived ? 'bold' : 'normal'};
    font-size: 18px;
    padding: 6px;
  `;

  return (
    <div>
      <TextStyle>{props.text}</TextStyle>
    </div>
  )
}

export default TextType;