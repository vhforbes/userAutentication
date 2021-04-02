import styled from 'styled-components';
import { rem } from 'polished';

import color from '../../resources/colorVariables';
import fonts from '../../resources/fontVariables';
// import device from '../../resources/sizeQueries';

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  ${fonts.multiBold}
  font-size: ${rem(fonts.regular)};
  margin-top: ${rem(30)};
  border: none;
  color: ${color.white};
  background-color: ${color.gray};
  width: ${rem(175)};
  height: ${rem(45)};
  border-radius: ${rem(100)};
  text-decoration: none;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: ${color.green};
  }
`;
