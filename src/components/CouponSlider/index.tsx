import Coupon, { CouponProps } from 'components/Coupon';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type CouponSliderProps = {
  items: CouponProps[];
};

const settings: SliderSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 1
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
