import React from 'react';

import * as S from './styled';

const Form = ({ children, title, onSubmit }) => (
  <S.FormContainer onSubmit={onSubmit}>
    <S.Title>
      {title}
    </S.Title>
    <S.FormWrapper>
      {children}
    </S.FormWrapper>
  </S.FormContainer>
);

export default Form;
