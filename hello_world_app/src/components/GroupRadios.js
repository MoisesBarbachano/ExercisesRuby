import React from 'react';
import styled from 'styled-components';
import RadioText from './RadioText';

const GroupRadios = () => {
  return (
    <div>
      <RadioText group="finish" text="Nunca"/>
      <RadioText group="finish" text="El"/>
      <RadioText group="finish" text="Después de"/>      
    </div>
  );
}

export default GroupRadios;