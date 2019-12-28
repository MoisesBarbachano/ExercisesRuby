import React from 'react';
import styled from 'styled-components';

const TextContainer = (props) => {
  const InputDesactivated = styled.input`
    background: gray;
    border: solid white 0px;
    height: 30px;
    width: ${props.size}px;
    margin-bottom: 10px;
    background: #e8e8e8;
    padding-left: 5px;
    border-radius: 2px;
  `;

  return (
    <div>
      <InputDesactivated value={props.text}/>
    </div>
  );
}

export default TextContainer;