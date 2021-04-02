import React from 'react';

import * as S from './styled';

const FormInput = ({
  name, label, type, handleChange,
}) => (
  <S.InputWrapper>
    <S.InputLabel>
      {label}
    </S.InputLabel>
    <S.Input name={name} type={type} onChange={handleChange} />
  </S.InputWrapper>
);

export default FormInput;
