import React from 'react';

import * as S from './styled';

const FormButton = ({ label, onClick, type }) => (
  <S.ButtonWrapper>
    <S.Button type={type} onClick={onClick}>{label}</S.Button>
  </S.ButtonWrapper>
);

export default FormButton;
