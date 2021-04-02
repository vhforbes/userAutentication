import styled from 'styled-components';
import { rem } from 'polished';

import color from '../../resources/colorVariables';
import fonts from '../../resources/fontVariables';
import device from '../../resources/sizeQueries';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${fonts.multiRegular};
  margin: ${rem(22)} 0;

  @media ${device.desktop} {
    min-width: 433px;
  }

  @media ${device.mobile} {
    min-width: 0;
    max-width: 100%;
  }
`;

export const InputLabel = styled.label`
  font-size: ${rem(fonts.small)};
  color: ${color.gray};
`;

export const Input = styled.input`
  ${fonts.multiRegular};
  border: none;
  border-bottom: 1px solid ${color.gray};
  height: ${rem(42)};
  font-size: ${rem(fonts.regular)};
  padding: 0 ${rem(10)};
  border-radius: 0;
`;
