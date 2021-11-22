import Coupon, { CouponProps } from 'components/Coupon';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type CouponSliderProps = {
  items: CouponProps[];
};

const settings: SliderSettings = {
  arrows: false,
  dots: true,
  infinite: false,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3.8
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.1
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2.8
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2.5
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2.1
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1.8
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1.6
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.4
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1.3
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1.1
      }
    },

    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const CouponSlider = ({ items }: CouponSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items?.map((item, index) => (
        <Coupon key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default CouponSlider;
