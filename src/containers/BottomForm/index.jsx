import React from 'react';

import * as S from './styled';

const BottomForm = ({ children }) => (
  <S.BottomContainer>
    <span>Or</span>
    {children}
  </S.BottomContainer>
);

export default BottomForm;
