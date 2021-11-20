import Slider, { SliderSettings } from 'components/Slider';
import Store, { StoreProps } from 'components/Store';
import * as S from './styles';

export type StoreSliderProps = {
  items: StoreProps[];
};

const settings: SliderSettings = {
  arrows: false,
  slidesToShow: 4
};

const StoreSlider = ({ items }: StoreSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items?.map((item) => (
        <Store key={item.name} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default StoreSlider;
