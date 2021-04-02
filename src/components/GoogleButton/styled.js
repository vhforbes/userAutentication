import styled from 'styled-components';
import { rem } from 'polished';

import fonts from '../../resources/fontVariables';
import color from '../../resources/colorVariables';

export const GoogleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoogleButtonWrapper = styled.div`
  ${fonts.latoRegular}
  font-size: ${rem(fonts.google)};
  margin-top: ${rem(30)};
  color: ${color.black};
  background-color: ${color.white};
  width: ${rem(175)};
  height: ${rem(45)};
  border-radius: ${rem(100)};
  text-decoration: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: ${rem(263)};
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;

  svg {
    margin-right: ${rem(20)};
  }
`;
