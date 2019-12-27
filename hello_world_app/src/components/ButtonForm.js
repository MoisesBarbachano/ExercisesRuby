import React from 'react';
import styled from 'styled-components';

const ButtonForm = (props) => {
  const ButttonStyled = styled.a`
    color: ${props.color};
    cursor: pointer;
    margin-left: 20px;
    margin-right: 5px;
  `;

  return (
    <p>
      <ButttonStyled>
        {props.text}
      </ButttonStyled>
    </p>
  );
}

export default ButtonForm;