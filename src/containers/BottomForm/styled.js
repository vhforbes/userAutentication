import styled from 'styled-components';
import { rem } from 'polished';

import fonts from '../../resources/fontVariables';
import color from '../../resources/colorVariables';

export const BottomContainer = styled.div`
  margin-top: ${rem(34)};
  border-top: 1px solid ${color.gray};
  text-align: center;
  ${fonts.multiRegular}

  span {
    font-size: ${fonts.small};
    position: relative;
    bottom: 12px;
    color: ${color.gray};
    background-color: ${color.white};
    width: ${rem(50)};
    border: ${rem(10)} solid ${color.white};
  }

  p {
    margin-top: ${rem(50)};
    color: ${color.gray};

    a {
      text-decoration: underline;
      color: ${color.green};

      :hover {
        color: ${color.gray};
      }
    }
  }

`;
