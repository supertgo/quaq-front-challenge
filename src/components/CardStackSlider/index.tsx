import CardStack, { CardStackProps } from 'components/CardStack';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type CardStackSliderProps = {
  items: CardStackProps[];
};

const settings: SliderSettings = {
  arrows: false,
  slidesToShow: 4
};

const CardStackSlider = ({ items }: CardStackSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <CardStack key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default CardStackSlider;
