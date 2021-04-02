import styled from 'styled-components';
import { rem } from 'polished';

import fonts from '../../resources/fontVariables';
import color from '../../resources/colorVariables';
import device from '../../resources/sizeQueries';

export const FormContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    height: 100%;
    margin: ${rem(20)} 0;
  }
`;

export const Title = styled.h1`
  ${fonts.multiRegular}
  font-size: ${rem(fonts.title)};
  color: ${color.gray};
  margin-bottom: ${rem(109)};
  text-align: center;
  @media ${device.mobile} {
    margin: ${rem(10)} 0;
  }
`;

export const FormWrapper = styled.div`
`;

export const BottomWrapper = styled.div`
  border-top: 1px solid ${color.gray};
  
`;
