import FilterButton, { FilterButtonProps } from 'components/FilterButton';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type FilterButtonSliderProps = {
  items: FilterButtonProps[];
};

const settings: SliderSettings = {
  arrows: false,
  slidesToShow: 10,
  infinite: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 8.2
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
        slidesToShow: 4.5
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3.6
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3.1
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 3.1
      }
    }
  ]
};

const FilterButtonSlider = ({ items }: FilterButtonSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <FilterButton key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default FilterButtonSlider;
