import React from 'react';

import * as S from './styled';

import { ReactComponent as Logo } from '../../icons/google.svg';

const GoogleButton = ({ title }) => (
  <S.GoogleWrapper>
    <S.GoogleButtonWrapper>
      <Logo />
      {title}
    </S.GoogleButtonWrapper>
  </S.GoogleWrapper>
);

export default GoogleButton;
