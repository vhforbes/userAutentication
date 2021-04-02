import styled from 'styled-components';

import { rem } from 'polished';

import color from '../../resources/colorVariables';
import fonts from '../../resources/fontVariables';
// import device from '../../resources/sizeQueries';

export const SignInWrapper = styled.div``;

export const ForgotPassword = styled.div`
  ${fonts.multiRegular};
  cursor: pointer;
  text-align: right;
  color: ${color.gray};
  font-size: ${rem(fonts.small)};

  a {
    text-decoration: none;

    :visited {
      color: ${color.gray};
    }

    :hover {
      color: ${color.green};
    }
  }
`;

export const ErrorMessage = styled.p`
  ${fonts.multiRegular};
  font-size: ${rem(fonts.small)};
  color: ${color.red};
  margin-top: ${rem(-22)};
`;
