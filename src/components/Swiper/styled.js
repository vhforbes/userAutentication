import styled from 'styled-components';

import { rem } from 'polished';

import color from '../../resources/colorVariables';
import fonts from '../../resources/fontVariables';
import device from '../../resources/sizeQueries';

export const SwiperWrapper = styled.div`
  width: 100%;
  background-color: ${color.green};
  text-align: center;

  @media ${device.mobile} {
    height: 600px;  
  }


  .swiper-container {
  margin-top: 100px;
  width: 700px;
  height: 85%;
  text-align: center;

  @media ${device.mobile} {
    margin-top: 10px;
    width: 300px;
    height: 65vh;  
    }
  }

.swiper-pagination-bullets {
  bottom: 50px !important;

  @media ${device.mobile} {
    bottom: 20px !important;
  }
}

.swiper-pagination-bullet {
  background-color: #fff;
}

.swiper-pagination-bullet-active {
  width: 20px !important;
  border-radius: 5px;
}

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  color: ${color.white};
  position: relative;
  bottom: 250px;

  @media ${device.mobile} {
    bottom: 300px;
    width: 90%;

  }
`;

export const Title = styled.h2`
  ${fonts.multiRegular};
  font-size: ${fonts.title};
  margin-bottom: ${rem(24)};

`;

export const Text = styled.p`
  ${fonts.multiRegular};
  font-size: ${rem(fonts.medium)}
`;
