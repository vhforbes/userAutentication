import React from 'react';
import { Swiper } from '../../components/Swiper';
import { SignInAndOut } from '../../Layouts/SignInAndOut';

import * as S from './styled';

export const SignInPage = () => (
  <SignInAndOut>
    <Swiper />
    <S.SignInWrapper>
      Sign In form Here!
    </S.SignInWrapper>
  </SignInAndOut>
);

export default SignInPage;
