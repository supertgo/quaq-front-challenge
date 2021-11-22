import Slider, { SliderSettings } from 'components/Slider';
import Store, { StoreProps } from 'components/Store';
import * as S from './styles';

export type StoreSliderProps = {
  items: StoreProps[];
};

const settings: SliderSettings = {
  arrows: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 11.2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 9.2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 7.2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 6.2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5.1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 4.3
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 4.1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 3.1
      }
    }
  ]
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
