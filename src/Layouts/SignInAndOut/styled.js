import styled from 'styled-components';
// import { rem } from 'polished';

import color from '../../resources/colorVariables';
// import fonts from '../../resources/fontVariables';
import device from '../../resources/sizeQueries';

export const SignInAndOutWrapper = styled.div`
  background-color: ${color.white};
  display: flex;
  justify-content: space-between;
  
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
