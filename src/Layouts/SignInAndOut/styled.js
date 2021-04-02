import styled from 'styled-components';
import { rem } from 'polished';

import color from '../../resources/colorVariables';
import fonts from '../../resources/fontVariables';
import device from '../../resources/sizeQueries';

export const SignInAndOutWrapper = styled.div`
  background-color: ${color.white};
  display: flex;
  justify-content: space-between;

  @media ${device.desktop} {
    flex-direction: row;
  }
  
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.p`
  ${fonts.avenirHeavy};
  font-size: ${fonts.big};
  position: absolute;
  right: ${rem(110)};
  top: ${rem(40)};

  @media ${device.mobile} {
    right: ${rem(20)};
    top: ${rem(630)};
  }
`;
