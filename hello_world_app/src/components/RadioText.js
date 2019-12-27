import React from 'react';
import styled from 'styled-components';

const InputRadioText = styled.input`
  margin-bottom: 22px;
  color: red;
`;

const RadioText = (props) => {
  return (
    <div>
      <InputRadioText name={props.group} type="radio"/>{props.text}<br/>
    </div>
  );
}

export default RadioText;