import React from 'react';

import * as S from './styled';

const FormInput = () => {
  const onChange = (e) => {
    e.value = 'value';
    return '';
  };

  return (
    <S.InputWrapper>
      <S.InputLabel>
        Invision
        <S.Input onChange={(e) => onChange(e)} />
      </S.InputLabel>
    </S.InputWrapper>
  );
};

export default FormInput;
