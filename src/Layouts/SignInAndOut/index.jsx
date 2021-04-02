import React from 'react';

import * as S from './styled';

export const SignInAndOut = ({ children }) => (
  <S.SignInAndOutWrapper>
    <S.LogoWrapper>
      Invision
    </S.LogoWrapper>
    {children}
  </S.SignInAndOutWrapper>
);

export default SignInAndOut;
